'use client';

import { PropsWithChildren } from 'react';

import { ReceiptModal } from '../modal';

import { useModal } from '@/src/entities/modal';

type Props = { id: number } & PropsWithChildren;

export const SeeMoreLayout = ({ children, id }: Props) => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(<ReceiptModal id={id} />);
  };

  return (
    <button className='w-full' onClick={handleClick}>
      {children}
    </button>
  );
};
