'use client';

import { ReactNode } from 'react';
import { AnimatePresence, m } from 'framer-motion';

import { useModal } from '../model/modal-store';
import { Modal } from '../ui/modal';

type Props = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: Props) => {
  const { modal } = useModal();

  return (
    <>
      <Modal />
      <AnimatePresence>
        <m.div animate={modal ? { scale: 0.95, y: 30 } : { scale: 1 }}>
          {children}
        </m.div>
      </AnimatePresence>
    </>
  );
};
