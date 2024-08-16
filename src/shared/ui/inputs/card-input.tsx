'use client';

import { useMask } from '@react-input/mask';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const CardInput = ({ ...restProps }: Props) => {
  const inputCardRef = useMask({
    mask: '____ ____ ____ ____',
    replacement: { _: /\d/ },
  });

  return (
    <input
      className='bg-default outline-none px-3 h-12 rounded-large shadow-sm'
      placeholder='Номер банковской карты'
      {...restProps}
      ref={inputCardRef}
      autoComplete='cc-number'
      inputMode='numeric'
    />
  );
};
