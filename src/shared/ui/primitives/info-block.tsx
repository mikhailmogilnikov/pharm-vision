import { Info } from '@phosphor-icons/react/dist/ssr';
import { PropsWithChildren } from 'react';

import { Article } from './article';
import { Flex } from './flex';
import { Text } from './text';

export const InfoBlock = ({ children }: PropsWithChildren) => {
  return (
    <Article>
      <Flex className='opacity-50' gap={3}>
        <Info className='mt-[2px]' size={22} weight='bold' />
        <Text size={14} weight={600}>
          {children}
        </Text>
      </Flex>
    </Article>
  );
};
