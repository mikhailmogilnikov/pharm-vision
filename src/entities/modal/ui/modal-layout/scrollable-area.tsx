import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { PropsWithChildren } from 'react';

export const ModalScrollableArea = ({ children }: PropsWithChildren) => {
  return (
    <ScrollShadow
      hideScrollBar
      className='w-full h-full flex flex-col flex-shrink'
      visibility='bottom'
      onPointerDownCapture={(e: any) => {
        if (e.target.scrollTop > 0) {
          e.stopPropagation();
        }
      }}
    >
      {children}
    </ScrollShadow>
  );
};
