'use client';

import { FormEventHandler, useState } from 'react';
import { Button } from '@nextui-org/button';

import { PasswordInput } from '@/src/shared/ui/inputs/password-input';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { SuccessBlock } from '@/src/widgets/success-block';

export const DeleteAccountForm = () => {
  const [password, setPassword] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsSubmited(true);
  };

  return !isSubmited ? (
    <form className='mt-4' onSubmit={handleSubmit}>
      <Flex col>
        <Text opacity={0.5} weight={600}>
          После удаления все невыведенные бонусы и чеки становятся недоступными.
        </Text>
        <PasswordInput
          required
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Введите пароль от аккаунта'
          size='lg'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button
          className='font-medium mt-4'
          color='danger'
          size='lg'
          type='submit'
          variant='shadow'
        >
          Отправить подтверждение на почту
        </Button>
      </Flex>
    </form>
  ) : (
    <Flex className='bg-background z-20 fixed inset-0'>
      <SuccessBlock
        description='Для подтверждения удаления аккаунта следуйте инструкциям в письме.'
        title='Письмо отправлено'
      />
    </Flex>
  );
};
