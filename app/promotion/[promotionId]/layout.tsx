'use client';

import { ReactNode, useEffect } from 'react';

import { LightenDarkenColor } from '@/src/shared/lib/utils/lighten-darker-color';

type Props = {
  children: ReactNode;
};

const colors = {
  green: '2abd34',
  lightgreen: '24d254',
  blue: '515ee6',
  purple: 'a566ff',
  orange: 'ff5b0b',
  magenta: 'e14efe',
  pink: 'fe4e87',
  coral: 'fe4e4e',
  red: 'e90e0e',
  emerald: '30cf8f',
  diamond: '26c8bd',
  golden: 'bbb358',
  peach: 'e67e41',
};

export default function PromotionLayout({ children }: Props) {
  const color = colors.purple;

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;

    if (root && root.style) {
      root.style.setProperty('--accent', `#${color}`);
      root.style.setProperty('--accent-30', `#${LightenDarkenColor(color, -20)}`);
      root.style.setProperty('--accent-70', `#${LightenDarkenColor(color, 40)}`);
    }
  }, []);

  return children;
}
