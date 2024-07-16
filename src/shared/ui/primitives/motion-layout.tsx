import { HTMLMotionProps, m } from 'framer-motion';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<HTMLMotionProps<'div'>>;

export const MotionLayout = ({ children, ...restProps }: Props) => {
  return (
    <m.div layout {...restProps}>
      {children}
    </m.div>
  );
};
