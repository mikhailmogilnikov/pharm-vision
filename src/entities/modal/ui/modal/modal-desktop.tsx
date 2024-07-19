import { m } from 'framer-motion';
import { ReactNode } from 'react';

import { useModal } from '../../model/modal-store';

import { CloseModalButton } from './close-button';

type Props = {
  children: ReactNode;
};

export const ModalDesktop = ({ children }: Props) => {
  const { setModal } = useModal();

  const closeModal = () => setModal(null);

  return (
    <m.div
      animate={{
        scale: 1,
        opacity: 1,
        transition: { ease: [0, 1, 0, 1], duration: 1 },
      }}
      className='absolute top-1/2 left-1/2 w-full mx-1 max-w-[440px] max-h-[70dvh] flex flex-col m-auto box-border bg-background dark:bg-default-50 rounded-3xl border-1 border-white/10 z-50 shadow-2xl shadow-black/50 overflow-hidden min-h-32'
      exit={{ filter: 'blur(25px)', opacity: 0, scale: 1.1 }}
      initial={{ scale: 0, x: '-50%', y: '-50%' }}
    >
      <CloseModalButton onClick={() => closeModal()} />
      {children}
    </m.div>
  );
};
