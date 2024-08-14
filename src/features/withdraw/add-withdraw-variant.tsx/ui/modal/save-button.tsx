import { Button } from '@nextui-org/button';
import { File } from '@phosphor-icons/react';

export const WithdrawSaveButton = () => {
  return (
    <Button className='bg-[--accent] w-full'>
      <File size={20} /> Сохранить
    </Button>
  );
};
