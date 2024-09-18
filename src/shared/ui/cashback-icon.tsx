'use client';

import { DiamondsFour, IconProps } from '@phosphor-icons/react';

type Props = {
  className?: string;
  size?: IconProps['size'];
  opacity?: IconProps['opacity'];
  weight?: IconProps['weight'];
};

export const CashbackIcon = ({ className, size, opacity, weight = 'bold' }: Props) => {
  return <DiamondsFour className={className} opacity={opacity} size={size} weight={weight} />;
};
