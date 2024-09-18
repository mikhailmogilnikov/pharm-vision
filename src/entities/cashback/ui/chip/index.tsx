import { ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { IconProps } from '@phosphor-icons/react';

import { CashbackIcon } from '@/src/shared/ui/cashback-icon';

const cashbackChip = tv({
  slots: {
    wrapper: 'flex items-center gap-1 rounded-full text-[--accent]',
    icon: 'text-inherit',
    text: 'text-inherit font-semibold',
  },
  variants: {
    color: {
      default: { wrapper: 'bg-background dark:bg-default-200' },
      onBg: { wrapper: 'bg-default' },
    },
    size: {
      sm: { wrapper: 'px-2 py-[1px]', text: 'text-[16px]' },
      md: { wrapper: 'px-2 py-[2px]', text: 'text-[18px]' },
      lg: '',
    },
    shadow: {
      true: { wrapper: 'shadow-base' },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    shadow: false,
  },
});

type Props = {
  type?: 'percent' | 'amount';
  children: ReactNode;
  iconWeight?: IconProps['weight'];
  classNames?: Partial<(typeof cashbackChip)['slots']>;
} & VariantProps<typeof cashbackChip>;

export const CashbackChip = (props: Props) => {
  const { children, type = 'amount', iconWeight = 'fill', classNames } = props;
  const { wrapper, icon, text } = cashbackChip();

  const isAmount = type === 'amount';

  return (
    <div className={`${wrapper(props)} ${classNames?.wrapper}`}>
      {isAmount && (
        <CashbackIcon className={`${icon(props)} ${classNames?.icon}`} weight={iconWeight} />
      )}
      <p className={`${text(props)} ${classNames?.text}`}>
        {children}
        {!isAmount && '%'}
      </p>
    </div>
  );
};
