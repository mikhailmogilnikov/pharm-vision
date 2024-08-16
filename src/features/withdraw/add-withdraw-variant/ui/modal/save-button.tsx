import { Button } from '@nextui-org/button';
import { FloppyDisk } from '@phosphor-icons/react';

export const WithdrawSaveButton = () => {
  return (
    <Button className='bg-[--accent] text-secondary-foreground w-full font-medium' size='lg'>
      <FloppyDisk size={20} weight='bold' />
      Сохранить
    </Button>
  );
};
