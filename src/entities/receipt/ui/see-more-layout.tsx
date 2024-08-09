'use client';

import { useModal } from '../../modal';

import { ReceiptModal } from './modal';

type Props = {
  children: React.ReactNode;
};

export const SeeMoreLayout = ({ children }: Props) => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(<ReceiptModal />);
  };

  return (
    <button className='w-full' onClick={handleClick}>
      {children}
    </button>
  );
};
