import { PropsWithChildren } from 'react';
import { DiamondsFour } from '@phosphor-icons/react/dist/ssr';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

export const CashbackAmountBlock = ({ children }: PropsWithChildren) => {
  return (
    <Flex center className='bg-default-200 px-2 rounded-full h-5' gap={1} width={'fit-content'}>
      <DiamondsFour className='text-[--accent]' size={10} weight='fill' />
      <Text className='text-[--accent] leading-1' size={14} weight={600}>
        {children}
      </Text>
    </Flex>
  );
};
