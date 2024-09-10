'use client';

import { Button } from '@nextui-org/button';
import { PencilSimple } from '@phosphor-icons/react';

import { ChangeUserInfoModal, EUserSettings } from '@/src/features/change-user-info';
import { useModal } from '@/src/entities/modal';

export const EditSettingButton = ({ id, initValue }: { id: EUserSettings; initValue: string }) => {
  const { setModal } = useModal();

  const handleOpenModal = () => {
    setModal(<ChangeUserInfoModal field={id} initValue={initValue} />);
  };

  return (
    <Button
      isIconOnly
      className='shadow-base'
      radius='full'
      size='sm'
      startContent={<PencilSimple size={18} weight='bold' />}
      onClick={handleOpenModal}
    />
  );
};
