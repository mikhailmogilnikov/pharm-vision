import { PropsWithChildren } from 'react';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

import { Flex } from './flex';
import { Text } from './text';

type Props = PropsWithChildren<{ title: string; href?: string }>;

export const HorisontalList = ({ children, title, href }: Props) => {
  return (
    <Flex col gap={2}>
      {href ? (
        <Link href={href}>
          <Flex center className='justify-between'>
            <Text size={20} weight={600}>
              {title}
            </Text>
            <CaretRight size={22} weight='bold' />
          </Flex>
        </Link>
      ) : (
        <Text size={20} weight={600}>
          {title}
        </Text>
      )}

      <Flex className='!w-[calc(100%+32px)] py-2 overflow-y-hidden overflow-x-scroll scrollbar-hide -mx-4 px-4'>
        {children}
      </Flex>
    </Flex>
  );
};
