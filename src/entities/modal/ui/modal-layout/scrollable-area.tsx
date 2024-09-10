'use client';

import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { PropsWithChildren, useState } from 'react';

export const ModalScrollableArea = ({ children }: PropsWithChildren) => {
  const [scrollValue, setScrollValue] = useState(0);

  return (
    <ScrollShadow
      hideScrollBar
      className='w-full h-full flex flex-col flex-shrink overscroll-none'
      onPointerDownCapture={(e: any) => {
        if (scrollValue > 0) {
          e.stopPropagation();
        }
      }}
      onScroll={(e: any) => setScrollValue(e.target.scrollTop)}
    >
      {children}
    </ScrollShadow>
  );
};
