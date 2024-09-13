'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useImmer } from 'use-immer';
import { FormEventHandler, useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import Link from 'next/link';

import { RegistrationInitialData, TRegistrationData } from '../config/initial-data';
import { validateRegistration } from '../lib/validate-project';
import { PasswordStrengthBar } from '../../check-password-strength';

import { PasswordInput } from '@/src/shared/ui/inputs/password-input';
import { CityPicker } from '@/src/shared/ui/inputs/city-picker';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { SuccessBlock } from '@/src/widgets/success-block';

type Props = {
  promotionId: string;
};

export const RegistationForm = ({ promotionId }: Props) => {
  const [userData, updateUserData] = useImmer(RegistrationInitialData);
  const { name, surname, patronymic, email, password, passwordConfirm } = userData;

  const [isSubmited, setIsSubmited] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const updateForm = <K extends keyof TRegistrationData>(key: K, value: TRegistrationData[K]) => {
    updateUserData((draft) => {
      draft[key] = value;
    });
    if (error) {
      setError(null);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    validateRegistration(userData).then((error) => {
      if (error) {
        setError(error);
      } else {
        setIsSubmited(true);
      }
    });
  };

  return !isSubmited ? (
    <form action='submit' onSubmit={handleSubmit}>
      <LayoutGroup>
        <Flex col className='max-w-96 md:pb-[22vh]'>
          <MotionLayout className='flex flex-col gap-4'>
            <Text className='mb-4' size={24} weight={600}>
              Регистрация
            </Text>
            <Input
              classNames={{ inputWrapper: '!bg-default' }}
              name='name'
              placeholder='Имя'
              size='lg'
              value={name}
              onChange={({ target: { value } }) => updateForm('name', value)}
            />
            <Flex>
              <Input
                classNames={{ inputWrapper: '!bg-default' }}
                name='surname'
                placeholder='Фамилия'
                size='lg'
                value={surname}
                onChange={({ target: { value } }) => updateForm('surname', value)}
              />
              <Input
                classNames={{ inputWrapper: '!bg-default' }}
                name='patronymic'
                placeholder='Отчество'
                size='lg'
                value={patronymic}
                onChange={({ target: { value } }) => updateForm('patronymic', value)}
              />
            </Flex>

            <Input
              classNames={{ inputWrapper: '!bg-default' }}
              name='email'
              placeholder='Email'
              size='lg'
              value={email}
              onChange={({ target: { value } }) => updateForm('email', value)}
            />

            <CityPicker setCity={(id) => updateForm('address', id)} />

            <Text className='mt-2' opacity={0.5} size={16} weight={600}>
              Придумайте пароль
            </Text>

            <PasswordInput
              autoComplete='new-password'
              classNames={{ inputWrapper: '!bg-default' }}
              name='password'
              placeholder='Пароль'
              size='lg'
              value={password}
              onChange={({ target: { value } }) => updateForm('password', value)}
            />
            <PasswordInput
              autoComplete='new-password'
              classNames={{ inputWrapper: '!bg-default' }}
              name='confirmPassword'
              placeholder='Подвердите пароль'
              size='lg'
              value={passwordConfirm}
              onChange={({ target: { value } }) => updateForm('passwordConfirm', value)}
            />
            <PasswordStrengthBar
              className='mt-3'
              password={password}
              setIsVerified={setIsValidPassword}
            />
          </MotionLayout>

          <AnimatePresence>
            {error && (
              <MotionLayout
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                className='px-4 py-3 rounded-large bg-danger/20 text-danger font-medium mt-4'
                exit={{ opacity: 0, filter: 'blur(24px)' }}
                initial={{ opacity: 0, filter: 'blur(24px)' }}
              >
                {error}
              </MotionLayout>
            )}
          </AnimatePresence>

          <MotionLayout>
            <Button
              fullWidth
              className='mt-4 font-semibold bg-[--accent] text-secondary-foreground'
              isDisabled={!isValidPassword}
              size='lg'
              type='submit'
              variant='shadow'
            >
              Зарегистрироваться
            </Button>

            <Text className='mt-6' weight={600}>
              <span className='opacity-50'>Уже есть аккаунт? </span>{' '}
              <Link replace className='text-[--accent]' href={`/login?promotion=${promotionId}`}>
                Войти.
              </Link>
            </Text>
          </MotionLayout>
        </Flex>
      </LayoutGroup>
    </form>
  ) : (
    <Flex className='bg-background z-20 fixed inset-0'>
      <SuccessBlock
        buttonText='Вернуться ко входу'
        description='Завершите регистрацию, перейдя по ссылке из письма, отправленное на указанный вами email-адрес'
        title='Аккаунт создан'
        url={`/login?promotion=${promotionId}`}
      />
    </Flex>
  );
};
