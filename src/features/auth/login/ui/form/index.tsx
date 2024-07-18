'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useState } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

import { PasswordInput } from '@/src/shared/ui/inputs/password-input';
import { PhoneInput } from '@/src/shared/ui/inputs/phone-input';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  promotion?: string;
};

export const LoginForm = ({ promotion }: Props) => {
  const { refresh } = useRouter();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    setCookie('token', phone);
    refresh();
  };

  return (
    <form className='max-w-96 w-full' onSubmit={handleSubmit}>
      <Flex col>
        <Text className='mb-4' size={24} weight={600}>
          Войти
        </Text>
        <PhoneInput
          name='phone'
          placeholder='Номер телефона'
          type='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <PasswordInput
          classNames={{ inputWrapper: '!bg-default' }}
          name='password'
          placeholder='Пароль'
          size='lg'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className='mt-4 font-medium'
          color='secondary'
          size='lg'
          type='submit'
          variant='shadow'
        >
          Войти
        </Button>
        {promotion && (
          <Text className='mt-4' weight={600}>
            <span className='opacity-50'>Нет аккаунта? </span>{' '}
            <Link
              replace
              className='text-secondary'
              href={`/promotion/${promotion}/registration`}
            >
              Зарегистрироваться.
            </Link>
          </Text>
        )}
      </Flex>
    </form>
  );
};
