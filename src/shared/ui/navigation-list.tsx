import { Squircle } from '@squircle-js/react';
import { Icon } from '@phosphor-icons/react';
import { Fragment } from 'react';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

import { TNavigation } from '../model/types/index.type';

import { Text } from './primitives/text';

type Props = {
  tabs: (TNavigation & { icon: Icon })[];
};

export const NavigationList = ({ tabs }: Props) => {
  return (
    <Squircle className='bg-default flex flex-col h-min' cornerRadius={18} cornerSmoothing={1}>
      {tabs.map(({ id, name, icon: Icon, href }) => (
        <Fragment key={id}>
          <Link
            className='w-full h-16 flex items-center px-5 gap-4 active:bg-default-200 transition-colors'
            href={href}
          >
            <Icon className='flex-shrink-0' size={22} weight='bold' />
            <Text className='w-full text-start' weight={600}>
              {name}
            </Text>
            <CaretRight className='flex-shrink-0' opacity={0.5} size={20} weight='bold' />
          </Link>
        </Fragment>
      ))}
    </Squircle>
  );
};
