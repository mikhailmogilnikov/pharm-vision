import { Button } from '@nextui-org/button';
import { Star, Trash } from '@phosphor-icons/react';

import { ButtonWithConfirm } from '@/src/shared/ui/buttons/button-with-confirm/button-with-confirm';

type Props = {
  isActive: boolean;
};

export const WithdrawVariantsFooter = ({ isActive }: Props) => {
  return (
    <>
      <ButtonWithConfirm
        fromModal
        isIconOnly
        action={() => {}}
        className='font-medium text-danger shadow-base'
        confirmColor='danger'
        description='Вы уверены, что хотите удалить этот способ оплаты? Это действие необратимо.'
        modalButtonContent={
          <>
            <Trash size={18} weight='bold' />
            Удалить
          </>
        }
      >
        <Trash size={20} weight='bold' />
      </ButtonWithConfirm>

      {isActive ? (
        <Button className='w-full bg-[--accent] text-secondary-foreground font-medium' size='lg'>
          <Star weight='fill' />
          Убрать из основного
        </Button>
      ) : (
        <Button className='w-full shadow-base text-[--accent] text-medium font-medium' size='lg'>
          <Star weight='bold' />
          Сделать основным
        </Button>
      )}
    </>
  );
};
