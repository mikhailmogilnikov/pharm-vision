'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { Squircle } from '@squircle-js/react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { SearchModal } from './modal';

import { Text } from '@/src/shared/ui/primitives/text';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';

export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <MotionLayout layoutId='search' onClick={() => setIsFocused(true)}>
        <Squircle
          className='w-full h-12 shadow-lg relative bg-default flex px-4 gap-3 items-center'
          cornerRadius={14}
          cornerSmoothing={1}
        >
          <MagnifyingGlass opacity={0.5} size={22} weight='bold' />
          <Text opacity={0.5}>Поиск</Text>
        </Squircle>
      </MotionLayout>

      <AnimatePresence>
        {isFocused && <SearchModal closeModal={() => setIsFocused(false)} />}
      </AnimatePresence>
    </>
  );
};
