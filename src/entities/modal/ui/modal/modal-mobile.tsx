import { ReactNode } from 'react';
import { m } from 'framer-motion';

import { useModal } from '../../model/modal-store';

import { CloseModalButton } from './close-button';

type Props = {
  children: ReactNode;
};

export const ModalMobile = ({ children }: Props) => {
  const { setModal } = useModal();

  const closeModal = () => setModal(null);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.y > 150) {
      closeModal();
    }
  };

  return (
    <m.div
      dragSnapToOrigin
      animate={{
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', stiffness: 300, damping: 34 },
      }}
      className='absolute border-t-1 border-white/10 bottom-0 w-full min-h-64 max-h-[97dvh] flex flex-col m-auto box-border bg-background dark:bg-default-50 rounded-t-[24px] z-50 shadow-2xl shadow-black overflow-hidden'
      drag='y'
      dragConstraints={{ top: 0, bottom: 1000 }}
      dragElastic={{ bottom: 0.1 }}
      exit={{
        y: '150%',
        filter: 'blur(24px)',
      }}
      initial={{ y: '150%' }}
      onDragEnd={handleDragEnd}
    >
      <div className='absolute top-0 left-1/2 -translate-x-[50%] w-72 h-8 flex items-center justify-center z-50'>
        <div className='w-9 h-[6px] backdrop-invert rounded-full opacity-50 ' />
      </div>

      <CloseModalButton onClick={() => closeModal()} />
      {children}
    </m.div>
  );
};
