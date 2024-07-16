'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { Squircle } from '@squircle-js/react';

import { Text } from '@/src/shared/ui/primitives/text';

export const Search = () => {
  return (
    <Squircle
      className='w-full h-12 shadow-lg relative bg-default flex px-4 gap-3 items-center'
      cornerRadius={14}
      cornerSmoothing={1}
    >
      <MagnifyingGlass opacity={0.5} size={22} weight='bold' />
      <Text opacity={0.5}>Поиск</Text>
    </Squircle>
  );
};
