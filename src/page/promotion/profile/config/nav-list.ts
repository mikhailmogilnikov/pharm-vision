import { ClockCounterClockwise, Receipt, Money } from '@phosphor-icons/react/dist/ssr';
import { Icon } from '@phosphor-icons/react';

import { TNavigation } from '@/src/shared/model/types/index.type';

export const ProfileNavListTabs = (promotionId: string): (TNavigation & { icon: Icon })[] => [
  {
    id: 1,
    name: 'История выводов',
    href: `/promotion/${promotionId}/profile/withdraw-history`,
    icon: ClockCounterClockwise,
  },
  {
    id: 2,
    name: 'Мои чеки',
    href: `/promotion/${promotionId}/profile/my-receipts`,
    icon: Receipt,
  },
  {
    id: 3,
    name: 'Способы выплаты',
    href: `/promotion/${promotionId}/profile/withdraw-variants`,
    icon: Money,
  },
];
