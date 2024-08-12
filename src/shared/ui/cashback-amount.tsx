import { PropsWithChildren } from 'react';
import { DiamondsFour } from '@phosphor-icons/react/dist/ssr';

import { Flex } from './primitives/flex';
import { Text } from './primitives/text';

export const CashbackAmountBlock = ({ children }: PropsWithChildren) => {
  return (
    <Flex center className='bg-default-200 px-3 rounded-full' width={'fit-content'}>
      <DiamondsFour className='text-[--accent] -mr-3' size={14} weight='bold' />
      <Text className='text-[--accent] leading-1'>{children}</Text>
    </Flex>
  );
};
