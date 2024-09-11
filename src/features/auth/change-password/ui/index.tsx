'use client';

import { Button } from '@nextui-org/button';
import { useState } from 'react';

import { PasswordStrengthBar } from '../../check-password-strength';

import { PasswordInput } from '@/src/shared/ui/inputs/password-input';
import { Flex } from '@/src/shared/ui/primitives/flex';

export const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  return (
    <form action='submit'>
      <Flex col>
        <PasswordInput
          placeholder='Старый пароль'
          size='lg'
          value={oldPassword}
          onChange={({ target }) => setOldPassword(target.value)}
        />
        <PasswordInput
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
  );
};
