'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { Input } from '@nextui-org/input';

import { PasswordInput } from '@/src/shared/ui/inputs/password-input';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { LightenDarkenColor } from '@/src/shared/lib/utils/lighten-darker-color';
import { NavTabPersistUpdater } from '@/src/shared/lib/providers/nav-tab-persist-updater';
import { InfoBlock } from '@/src/shared/ui/primitives/info-block';

type Props = {
  promotion?: string;
};

export const LoginForm = ({ promotion }: Props) => {
  const { refresh } = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (promotion) {
      const root = document.querySelector(':root') as HTMLElement;

      if (root && root.style) {
        root.style.setProperty('--accent', '#24d254');
        root.style.setProperty('--accent-30', `#${LightenDarkenColor('24d254', -20)}`);
        root.style.setProperty('--accent-70', `#${LightenDarkenColor('24d254', 40)}`);
      }
    }
  }, []);

  const handleSubmit = () => {
    setCookie('token', email);
    refresh();
  };

  return (
    <form className='max-w-96 w-full' onSubmit={handleSubmit}>
      <Flex col>
        <Text className='mb-4' size={24} weight={600}>
          Войти
        </Text>
        <Input
          required
          autoComplete='email'
          classNames={{ inputWrapper: '!bg-default' }}
          name='email'
          placeholder='Почта'
          size='lg'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          required
          classNames={{ inputWrapper: '!bg-default' }}
          name='password'
          placeholder='Пароль'
          size='lg'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={`mt-2 font-semibold  ${promotion ? 'bg-[--accent]' : 'bg-secondary'} text-secondary-foreground`}
          size='lg'
          type='submit'
        >
          Войти
        </Button>
        {promotion && (
          <NavTabPersistUpdater
            storageKey={`customer-${promotion}-nav`}
            value={`/promotion/${promotion}`}
          >
            <InfoBlock className='my-2 p-4'>
              Подсказка: чтобы вернуться на главную, нажмите на логотип.
            </InfoBlock>

            <Text size={16} weight={600}>
              <span className='opacity-50'>Нет аккаунта? </span>{' '}
              <Link className='text-[--accent]' href={`/promotion/${promotion}/registration`}>
                Зарегистрироваться.
              </Link>
            </Text>

            <Text className='-mt-3' size={16} weight={600}>
              <span className='opacity-50'>Забыли пароль? </span>{' '}
              <Link href={`/promotion/${promotion}/password-recovery`}>Восстановить.</Link>
            </Text>

            <Text className='mt-2' opacity={0.5} size={16} weight={600}>
              Тестовая почта и пароль: <br />
              admin@test.com <br />
              admin
            </Text>
          </NavTabPersistUpdater>
        )}
      </Flex>
    </form>
  );
};
