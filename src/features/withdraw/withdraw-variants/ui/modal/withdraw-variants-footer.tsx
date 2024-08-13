import { Button } from '@nextui-org/button';
import { Trash } from '@phosphor-icons/react';

import { ButtonWithConfirm } from '@/src/shared/ui/buttons/button-with-confirm/button-with-confirm';

type Props = {
  isActive: boolean;
};

export const WithdrawVariantsFooter = ({ isActive }: Props) => {
  return (
    <>
      {isActive ? (
        <Button className='w-full text-medium'>Убрать из основного</Button>
      ) : (
        <Button className='w-full bg-[--accent] text-medium'>Сделать основным</Button>
      )}

      <ButtonWithConfirm
        isIconOnly
        action={() => {}}
        color='danger'
        description='Вы уверены, что хотите удалить этот способ оплаты? Это действие необратимо.'
        modalButtonContent={
          <>
            <Trash size={18} weight='bold' />
            Удалить
          </>
        }
        variant='flat'
      >
        <Trash size={16} weight='bold' />
      </ButtonWithConfirm>
    </>
  );
};
