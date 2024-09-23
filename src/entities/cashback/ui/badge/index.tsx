import { PropsWithChildren } from 'react';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { CashbackIcon } from '@/src/shared/ui/cashback-icon';

export const CashbackAmountBlock = ({ children }: PropsWithChildren) => {
  return (
    <Flex center className='bg-default-200 px-2 rounded-full h-5' gap={1} width={'fit-content'}>
      <CashbackIcon className='text-[--accent]' size={10} weight='fill' />
      <Text className='text-[--accent] leading-1' size={14} weight={600}>
        {children}
      </Text>
    </Flex>
  );
};
