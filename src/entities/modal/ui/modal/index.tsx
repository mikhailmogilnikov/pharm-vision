'use client';

import { RemoveScroll } from 'react-remove-scroll';
import { AnimatePresence, m } from 'framer-motion';
import { useMedia } from 'react-use';

import { useModal } from '../../model/modal-store';

import { ModalMobile } from './modal-mobile';
import { ModalDesktop } from './modal-desktop';

export const Modal = () => {
  const isMobile = useMedia('(max-width: 768px)', false);
  const { modal, setModal } = useModal();

  const closeModal = () => {
    setModal(false);
  };

  return (
    <AnimatePresence>
      {modal ? (
        <RemoveScroll className='fixed inset-0 z-50'>
          <m.button
            animate={{ opacity: 1 }}
            className='fixed w-full h-dvh bg-opacity-70 bg-black z-10'
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeModal}
          />
          {isMobile ? <ModalMobile>{modal}</ModalMobile> : <ModalDesktop>{modal}</ModalDesktop>}
        </RemoveScroll>
      ) : null}
    </AnimatePresence>
  );
};
