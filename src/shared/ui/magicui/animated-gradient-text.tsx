'use client';

import { cn } from '../../lib/utils';

import { AnimatedGradientTextLayout } from './animated-gradient-text-layout';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const AnimatedGradientText = ({ children, className }: Props) => {
  return (
    <AnimatedGradientTextLayout>
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[--accent-70] via-[--accent-30] to-[--accent-70] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent ${className}`,
        )}
      >
        {children}
      </span>
    </AnimatedGradientTextLayout>
  );
};
