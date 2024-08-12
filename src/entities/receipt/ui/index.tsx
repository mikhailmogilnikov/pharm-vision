import { TReceipt } from '../model/receipt.type';
import { CashbackAmountBlock } from '../../cashback';

import { SeeMoreLayout } from './see-more-layout';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { getTime } from '@/src/shared/lib/utils/get-time';

export const Receipt = ({ name, cashback, date, price, id }: TReceipt) => {
  return (
    <SeeMoreLayout id={id}>
      <Flex center className='h-min w-full hover:-ml-1 transition-all'>
        <Flex col>
          <Flex className='justify-between'>
            <Text size={20} tag={'h2'}>
              {name}
            </Text>
            <Text className='text-nowrap' size={22} tag='h3'>
              {price} ₽
            </Text>
          </Flex>
          <Flex className='justify-between -mt-4'>
            <Text opacity={0.5}>{getTime(new Date(date))}</Text>
            <CashbackAmountBlock>{cashback}</CashbackAmountBlock>
          </Flex>
        </Flex>
      </Flex>
    </SeeMoreLayout>
  );
};
