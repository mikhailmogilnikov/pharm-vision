import { m, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<MotionProps>;

export const MotionLayout = ({ children, ...restProps }: Props) => {
  return (
    <m.div layout {...restProps}>
      {children}
    </m.div>
  );
};
