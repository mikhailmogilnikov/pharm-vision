'use client';

import { Button } from '@nextui-org/button';
import { PencilSimple } from '@phosphor-icons/react';

export const EditSettingButton = () => {
  return (
    <Button
      isIconOnly
      className='shadow-base'
      radius='full'
      size='sm'
      startContent={<PencilSimple size={18} weight='bold' />}
    />
  );
};
