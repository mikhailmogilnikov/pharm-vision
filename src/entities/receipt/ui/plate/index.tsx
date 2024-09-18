'use client';

import { TReceipt } from '../../model/receipt.type';
import { ReceiptModal } from '../modal';

import { getTime } from '@/src/shared/lib/utils/get-time';
import { CashbackChip } from '@/src/entities/cashback';
import { ListElement } from '@/src/shared/ui/primitives/element';
import { useModal } from '@/src/entities/modal';

export const Receipt = ({ name, cashback, date, price, id }: TReceipt) => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(<ReceiptModal id={id} />);
  };

  return (
    <ListElement
      description={`${getTime(new Date(date))} · ${price} ₽`}
      endContent={
        <CashbackChip classNames={{ wrapper: 'mt-2' }} size='sm'>
          {cashback}
        </CashbackChip>
      }
      title={name}
      onClick={handleClick}
    />
  );
};
