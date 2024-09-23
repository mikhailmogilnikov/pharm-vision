import { clsx } from 'clsx';
import { Children, cloneElement, ReactNode } from 'react';

type StagesProps = {
  children: ReactNode;
  className?: string;
};

type StageProps = {
  children?: ReactNode;
  title?: string;
  icon: ReactNode;
  isLast?: boolean;
  iconClassnames?: string;
};

export const Stages = ({ children, className }: StagesProps) => {
  const stages = Children.toArray(children);

  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      {stages.map((child, index) => {
        return cloneElement(child as React.ReactElement<any>, {
          isLast: index === stages.length - 1,
        });
      })}
    </div>
  );
};

export const Stage = ({ children, title, icon, isLast, iconClassnames }: StageProps) => {
  const childrenWrapperClassnames = clsx(' ml-5 pl-8 min-h-6 pb-1 font-medium opacity-50 text-sm', {
    'border-l-1 border-divider': !isLast,
  });

  const iconClassname = clsx(
    'flex items-center justify-center w-10 h-10 rounded-full bg-default font-semibold',
    iconClassnames,
  );

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-3 items-center'>
        <div className={iconClassname}>{icon}</div>
        <h4 className='font-semibold'>{title}</h4>
      </div>

      <div className={childrenWrapperClassnames}>{children}</div>
    </div>
  );
};
