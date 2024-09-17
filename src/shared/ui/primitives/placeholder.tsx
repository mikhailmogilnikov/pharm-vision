import { Icon } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

type Props = {
  icon: Icon;
  children: ReactNode;
  description?: string;
  action?: ReactNode;
  wrapperClassname?: string;
};

export const Placeholder = ({
  icon: Icon,
  children,
  description,
  action,
  wrapperClassname,
}: Props) => {
  return (
    <div className={clsx('flex flex-col gap-4 items-center w-full mt-10', wrapperClassname)}>
      <Icon opacity={0.5} size={60} weight='regular' />
      <h3 className='text-xl font-semibold '>{children}</h3>
      <p className='text-base font-medium opacity-50 -mt-2 max-w-80'>{description}</p>
      {action}
    </div>
  );
};
