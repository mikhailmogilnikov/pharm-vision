/* eslint-disable jsx-a11y/no-autofocus */
import { Squircle } from '@squircle-js/react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';
import { RemoveScroll } from 'react-remove-scroll';

import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  closeModal: VoidFunction;
};

export const SearchModal = ({ closeModal }: Props) => {
  return (
    <RemoveScroll className='fixed inset-0 z-50'>
      <MotionLayout
        animate={{ opacity: 1 }}
        className='w-full h-full bg-background'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        layout={false}
        transition={{ duration: 0.2 }}
      >
        <Flex col className='max-w-5xl mx-auto p-4'>
          <MotionLayout layoutId='search'>
            <Squircle
              className='w-full h-12 shadow-lg relative bg-default flex px-4 gap-3 items-center'
              cornerRadius={14}
              cornerSmoothing={1}
            >
              <MagnifyingGlass className='absolute left-4' opacity={0.5} size={22} weight='bold' />
              <input
                autoFocus
                className='bg-transparent outline-none h-full font-medium px-8 w-full'
                placeholder='Введите хотя бы 2 символа...'
              />
              <button
                className='rounded-full w-6 h-6 bg-default-200 flex items-center justify-center absolute right-4'
                onClick={closeModal}
              >
                <X opacity={0.5} weight='bold' />
              </button>
            </Squircle>
          </MotionLayout>
        </Flex>
      </MotionLayout>
    </RemoveScroll>
  );
};
