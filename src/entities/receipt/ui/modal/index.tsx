import { ReceiptConst } from '../../config/receipt';
import { formatDate } from '../../lib/utils/format-date';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { ModalLayout } from '@/src/entities/modal';
import { Text } from '@/src/shared/ui/primitives/text';
import { CashbackAmountBlock } from '@/src/entities/cashback';
import { Article } from '@/src/shared/ui/primitives/article';

type Props = {
  id: number;
};

export const ReceiptModal = ({ id }: Props) => {
  //request
  const { number, name, date, price, cashback, address, items } = ReceiptConst;

  return (
    <ModalLayout>
      <Flex center col className='p-4' gap={8}>
        <Text className='mt-5' tag='h2' weight={600}>
          {formatDate(new Date(date))}
        </Text>
        <Flex center col>
          <Text size={24} tag='h2' weight={600}>
            {name}
          </Text>
          <Text className='-mt-4' opacity={0.5}>
            Чек №{number}
          </Text>
        </Flex>

        <Flex center col className='justify-center' gap={1}>
          <Text size={26} tag='h3' weight={600}>
            {price} ₽
          </Text>
          <CashbackAmountBlock>{cashback}</CashbackAmountBlock>
        </Flex>

        <Article title='Список покупок'>
          <>
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
          </>
        </Article>

        <Article title='Адрес'>
          <Text opacity={0.5} tag='h4'>
            {address}
          </Text>
        </Article>
      </Flex>
    </ModalLayout>
  );
};
