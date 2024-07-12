'use client';

import { Input, InputProps } from '@nextui-org/input';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import { useState } from 'react';

export const PasswordInput = ({ ...rest }: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const ShowPasswordButton = isVisible ? (
    <button type='button' onClick={() => setIsVisible(false)}>
      <EyeClosed className='w-6 h-6' opacity={0.5} weight='bold' />
    </button>
  ) : (
    <button type='button' onClick={() => setIsVisible(true)}>
      <Eye className='w-6 h-6' opacity={0.5} weight='bold' />
    </button>
  );

  return (
    <Input
      endContent={ShowPasswordButton}
      type={isVisible ? 'text' : 'password'}
      {...rest}
    />
  );
};
