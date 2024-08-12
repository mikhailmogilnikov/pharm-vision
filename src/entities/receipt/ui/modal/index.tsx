import { Squircle } from '@squircle-js/react';

import { ReceiptConst } from '../../config/receipt';
import { formatDate } from '../../lib/utils/format-date';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { ModalLayout } from '@/src/entities/modal';
import { Text } from '@/src/shared/ui/primitives/text';
import { CashbackAmountBlock } from '@/src/entities/cashback';

type Props = {
  id: number;
};

export const ReceiptModal = ({ id }: Props) => {
  //request
  const { number, name, date, price, cashback, address, items } = ReceiptConst;

  return (
    <ModalLayout footer={<></>} title={formatDate(new Date(date))}>
      <Flex center col className='-mt-10 px-4 pb-6'>
        <Flex center col className='my-3'>
          <Text tag='h2'>{name}</Text>
          <Text className='-mt-4' opacity={0.5}>
            №{number}
          </Text>
          <Flex className='justify-center'>
            <Text size={26} tag='h3'>
              {price} ₽
            </Text>
            <CashbackAmountBlock>{cashback}</CashbackAmountBlock>
          </Flex>
        </Flex>

        <Squircle
          className='bg-default mt-2 h-min p-5 w-full'
          cornerRadius={18}
          cornerSmoothing={1}
        >
          <Text tag='h4'>Адрес:</Text>
          <Text className='leading-4 mt-2' opacity={0.5} tag='h4'>
            {address}
          </Text>
        </Squircle>
        <Flex col className='mt-2'>
          <Text className='-mb-2' size={18} tag='h4'>
            Список покупок:
          </Text>
          <ul>
            {items.map((item) => (
              <li key={item.vendor} className='flex justify-between py-1 items-end'>
                <Text opacity={0.5} size={16}>
                  {item.vendor} {item.name}
                </Text>
                <Flex center width={'fit content'}>
                  {item.cashback && <CashbackAmountBlock>{item.cashback}</CashbackAmountBlock>}
                  <Text>{item.price} ₽</Text>
                </Flex>
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </ModalLayout>
  );
};
