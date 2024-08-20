import {
  ClockCounterClockwise,
  Receipt,
  CreditCard,
  Question,
  BookOpenText,
} from '@phosphor-icons/react/dist/ssr';
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
    name: 'Способы выплат',
    href: `/promotion/${promotionId}/profile/withdraw-variants`,
    icon: CreditCard,
  },
  {
    id: 4,
    name: 'Поддержка',
    href: `/promotion/${promotionId}/profile/support`,
    icon: Question,
  },
  {
    id: 5,
    name: 'Положения и условия',
    href: `/promotion/${promotionId}/profile/terms`,
    icon: BookOpenText,
  },
];
