'use client';

import { PropsWithChildren } from 'react';

import { WithdrawVariantModal } from './modal/withdraw-variant-modal';

import { useModal } from '@/src/entities/modal';

type Props = {
  variant: {
    title: string;
    id: number;
    icon: React.ReactNode;
  };
  isActive: boolean;
} & PropsWithChildren;

export const WithdrawVariantLayput = ({ children, variant, isActive }: Props) => {
  const { setModal } = useModal();
  const handleClick = () => {
    setModal(<WithdrawVariantModal {...variant} isActive={isActive} />);
  };

  return (
    <button className='py-1 w-full' onClick={handleClick}>
      {children}
    </button>
  );
};
