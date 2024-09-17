'use client';

import { Button } from '@nextui-org/button';
import { FormEventHandler, useState } from 'react';

import { PasswordStrengthBar } from '../../check-password-strength';

import { PasswordInput } from '@/src/shared/ui/inputs/password-input';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { SuccessBlock } from '@/src/widgets/success-block';

export const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsSubmited(true);
  };

  return !isSubmited ? (
    <form action='submit' onSubmit={handleSubmit}>
      <Flex col>
        <PasswordInput
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Старый пароль'
          size='lg'
          value={oldPassword}
          onChange={({ target }) => setOldPassword(target.value)}
        />
        <PasswordInput
          classNames={{ inputWrapper: '!bg-default' }}
          placeholder='Новый пароль'
          size='lg'
          value={newPassword}
          onChange={({ target }) => setNewPassword(target.value)}
        />
        <Flex className='my-2'>
          <PasswordStrengthBar password={newPassword} setIsVerified={setIsValidPassword} />
        </Flex>

        <Button
          className='bg-[--accent] text-secondary-foreground mt-2 font-medium'
          isDisabled={!isValidPassword}
          size='lg'
          type='submit'
        >
          Изменить пароль
        </Button>
      </Flex>
    </form>
  ) : (
    <Flex className='bg-background z-20 fixed inset-0'>
      <SuccessBlock
        description='При следующем входе вводите изменённый пароль.'
        title='Пароль изменен'
      />
    </Flex>
  );
};
