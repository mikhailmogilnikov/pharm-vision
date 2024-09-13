'use client';

import { Input } from '@nextui-org/input';
import { FormEventHandler, useState } from 'react';
import { Button } from '@nextui-org/button';
import { usePathname } from 'next/navigation';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { SuccessBlock } from '@/src/widgets/success-block';

export const PasswordRecoveryForm = () => {
  const pathname = usePathname();
  const promotionId = pathname.split('/promotion/')[1].split('/')[0];
  const [email, setEmail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    fetch('http://192.168.22.177/api/admins').then(console.log);
    e.preventDefault();
    setIsSubmited(true);
  };

  return !isSubmited ? (
    <form action='submit' onSubmit={handleSubmit}>
      <Flex col>
        <Text className='px-1' opacity={0.5} weight={500}>
          Мы вышлем инструкции по сбросу пароля на Вашу электронную почту.
        </Text>
        <Input
          required
          autoComplete='email'
          classNames={{ inputWrapper: '!bg-default' }}
          name='email'
          placeholder='Введите email'
          size='lg'
          type='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Button
          className='bg-[--accent] text-secondary-foreground font-medium'
          size='lg'
          type='submit'
        >
          Восстановить
        </Button>
      </Flex>
    </form>
  ) : (
    <Flex className='bg-background z-20 fixed inset-0'>
      <SuccessBlock
        buttonText='Вернуться ко входу'
        description='Для смены пароля, следуйте инструкциям, высланным на почту'
        title='Письмо отправлено'
        url={`/login?promotion=${promotionId}`}
      />
    </Flex>
  );
};
