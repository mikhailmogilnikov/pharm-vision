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

        <Article title='Покупки с кешбэком'>
          <>
            {items.map((item) => (
              <Flex key={item.vendor} className='flex justify-between py-1 items-end' tag='li'>
                <Flex col gap={1}>
                  <Text size={16}>{item.name}</Text>
                  <Text opacity={0.5} size={14}>
                    {item.vendor}
                  </Text>
                </Flex>

                <Flex center col gap={1} width={'fit-content'}>
                  <Text>{item.price} ₽</Text>
                  {item.cashback && <CashbackAmountBlock>{item.cashback}</CashbackAmountBlock>}
                </Flex>
              </Flex>
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
