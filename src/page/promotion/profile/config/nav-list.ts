import { ClockCounterClockwise, Receipt } from '@phosphor-icons/react/dist/ssr';
import { Icon } from '@phosphor-icons/react';

import { TNavigation } from '@/src/shared/model/types/index.type';

export const ProfileNavListTabs = (promotionId: string): (TNavigation & { icon: Icon })[] => [
  {
    id: 1,
    name: 'История выводов',
    href: `/promotions/${promotionId}/checks`,
    icon: ClockCounterClockwise,
  },
  {
    id: 2,
    name: 'Мои чеки',
    href: `/promotions/${promotionId}/checks`,
    icon: Receipt,
  },
];
