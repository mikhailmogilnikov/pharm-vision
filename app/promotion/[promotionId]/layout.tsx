'use client';

import { ReactNode, useEffect } from 'react';

import { LightenDarkenColor } from '@/src/shared/lib/utils/lighten-darker-color';

type Props = {
  children: ReactNode;
};

export default function PromotionLayout({ children }: Props) {
  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;

    if (root && root.style) {
      root.style.setProperty('--accent', '#24d254');
      root.style.setProperty('--accent-30', `#${LightenDarkenColor('24d254', -20)}`);
      root.style.setProperty('--accent-70', `#${LightenDarkenColor('24d254', 40)}`);
    }
  }, []);

  return children;
}
