'use client';

import { Button } from '@nextui-org/button';

import { Flex } from '@/src/shared/ui/flex';
import { PasswordInput } from '@/src/shared/ui/inputs/password-input';
import { PhoneInput } from '@/src/shared/ui/inputs/phone-input';
import { Text } from '@/src/shared/ui/text';

export const LoginForm = () => {
  return (
    <Flex col className='max-w-96'>
      <Text className='mb-4' size={24} weight={600}>
        Войти
      </Text>
      <PhoneInput placeholder='Номер телефона' />
      <PasswordInput
        classNames={{ inputWrapper: '!bg-default' }}
        placeholder='Пароль'
        size='lg'
      />
      <Button
        className='mt-4 font-medium'
        color='secondary'
        size='lg'
        variant='shadow'
      >
        Войти
      </Button>
      <Text className='mt-4' weight={600}>
        <span className='opacity-50'>Нет аккаунта? </span>{' '}
        <button className='text-secondary'>Зарегистрироваться.</button>
      </Text>
    </Flex>
  );
};
