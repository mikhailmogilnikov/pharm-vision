'use client';

import { useMask } from '@react-input/mask';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const PhoneInput = ({ ...restProps }: Props) => {
  const inputPhoneRef = useMask({
    mask: '+_ (___) ___-__-__',
    replacement: { _: /\d/ },
  });

  return (
    <input
      className='bg-default outline-none px-3 h-12 rounded-large shadow-sm'
      placeholder='+7 (999) 999-99-99'
      {...restProps}
      ref={inputPhoneRef}
      inputMode='numeric'
      type='tel'
    />
  );
};
