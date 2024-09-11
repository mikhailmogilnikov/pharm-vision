import { Info } from '@phosphor-icons/react/dist/ssr';
import { PropsWithChildren } from 'react';

import { Article } from './article';
import { Flex } from './flex';
import { Text } from './text';

export const InfoBlock = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <Article blockClassname={className}>
      <Flex className='opacity-50' gap={3}>
        <Info className='mt-[2px]' size={22} weight='bold' />
        <Text className='leading-5' size={14} weight={600}>
          {children}
        </Text>
      </Flex>
    </Article>
  );
};
