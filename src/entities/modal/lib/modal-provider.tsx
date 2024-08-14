'use client';

import { ReactNode } from 'react';
import { AnimatePresence, m, useWillChange } from 'framer-motion';

import { useModal } from '../model/modal-store';
import { Modal } from '../ui/modal';

type Props = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: Props) => {
  const { modal } = useModal();
  const willChange = useWillChange();

  return (
    <>
      <Modal />
      <AnimatePresence>
        <m.div animate={modal ? { scale: 0.95, y: 30 } : { scale: 1 }} style={{ willChange }}>
          {children}
        </m.div>
      </AnimatePresence>
    </>
  );
};
