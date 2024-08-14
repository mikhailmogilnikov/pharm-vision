'use client';

import { PlusCircle } from '@phosphor-icons/react';
import { Button } from '@nextui-org/button';

import { AddCardModal } from './modal/add-card-modal';
import { AddPhoneModal } from './modal/add-phone-modal';

import { TWithdrawType } from '@/src/widgets/customer/withdraw-variants';
import { useModal } from '@/src/entities/modal';

type Props = {
  type: TWithdrawType;
};

export const AddWithdrawVariant = ({ type }: Props) => {
  const { setModal } = useModal();
  const handleClick = () => {
    if (type === 'bank') {
      setModal(<AddCardModal />);
    }
    if (type === 'phone') {
      setModal(<AddPhoneModal />);
    }
  };

  return (
    <Button
      isIconOnly
      className=' -ml-1'
      radius='full'
      size='sm'
      variant='light'
      onClick={handleClick}
    >
      <PlusCircle size={22} />
    </Button>
  );
};
