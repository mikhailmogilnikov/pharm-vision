'use client';

import { Button } from '@nextui-org/button';
import { PlusCircle } from '@phosphor-icons/react';

export const EnterQrManuallyProfileButton = () => {
  return (
    <Button className='font-semibold h-14' size='lg'>
      <PlusCircle size={20} weight='bold' />
      Добавить чек
    </Button>
  );
};
