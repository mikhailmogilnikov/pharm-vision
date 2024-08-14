import { TReceipt } from '../../model/receipt.type';
import { CashbackAmountBlock } from '../../../cashback';

import { SeeMoreLayout } from './see-more-layout';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { getTime } from '@/src/shared/lib/utils/get-time';

export const Receipt = ({ name, cashback, date, price, id }: TReceipt) => {
  return (
    <SeeMoreLayout id={id}>
      <Flex center className='h-min w-full active:scale-95 transition-transform'>
        <Flex col gap={1}>
          <Flex className='justify-between'>
            <Text size={18} tag={'h2'} weight={600}>
              {name}
            </Text>
            <Text className='text-nowrap' size={18} tag='h3' weight={600}>
              {price} ₽
            </Text>
          </Flex>
          <Flex className='justify-between'>
            <Text opacity={0.5}>{getTime(new Date(date))}</Text>
            <CashbackAmountBlock>{cashback}</CashbackAmountBlock>
          </Flex>
        </Flex>
      </Flex>
    </SeeMoreLayout>
  );
};
