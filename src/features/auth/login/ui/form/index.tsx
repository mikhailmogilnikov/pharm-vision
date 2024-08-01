'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

import { PasswordInput } from '@/src/shared/ui/inputs/password-input';
import { PhoneInput } from '@/src/shared/ui/inputs/phone-input';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { LightenDarkenColor } from '@/src/shared/lib/utils/lighten-darker-color';

type Props = {
  promotion?: string;
};

export const LoginForm = ({ promotion }: Props) => {
  const { refresh } = useRouter();

  const [phone, setPhone] = useState('');
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
          className='mt-4 font-semibold bg-[--accent] text-secondary-foreground'
          size='lg'
          type='submit'
        >
          Войти
        </Button>
        {promotion && (
          <Text className='mt-4' weight={600}>
            <span className='opacity-50'>Нет аккаунта? </span>{' '}
            <Link replace className='text-[--accent]' href={`/promotion/${promotion}/registration`}>
              Зарегистрироваться.
            </Link>
          </Text>
        )}
      </Flex>
    </form>
  );
};
