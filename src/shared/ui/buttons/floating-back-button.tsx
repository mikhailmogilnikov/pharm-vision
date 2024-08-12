'use client';

import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { CaretLeft } from '@phosphor-icons/react/dist/ssr';
import { createPortal } from 'react-dom';

import { MotionLayout } from '../primitives/motion-layout';

import { BackButton } from './back-button';

export const FloatingBackButton = () => {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 66) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <AnimatePresence>
      {isScrolled && (
        <MotionLayout
          animate={{ y: 0, x: '-50%' }}
          className='fixed bottom-10 left-[50%] z-40'
          exit={{ y: 200, x: '-50%' }}
          initial={{ y: 200, x: '-50%' }}
        >
          <BackButton
            className='bg-default/80 backdrop-blur-lg shadow-base font-semibold gap-2'
            radius='full'
            size='lg'
            startContent={<CaretLeft size={20} weight='bold' />}
          >
            Назад
          </BackButton>
        </MotionLayout>
      )}
    </AnimatePresence>
  );
};

export const FloatingBackButtonPortal = () => {
  if (typeof window === 'undefined') return null;

  return createPortal(<FloatingBackButton />, document.body);
};
