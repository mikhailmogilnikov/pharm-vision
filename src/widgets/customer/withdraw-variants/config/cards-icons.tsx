import { DotsThree } from '@phosphor-icons/react/dist/ssr';

import { TCardsIcons } from '../model/variants-icons.type';

import { VisaIcon } from '@/src/shared/assets/withdraw-variants/visa';
import { MastercardIcon } from '@/src/shared/assets/withdraw-variants/mastercard';
import { MirIcon } from '@/src/shared/assets/withdraw-variants/mir';

export const CardIcons: TCardsIcons = {
  mir: <MirIcon />,
  masterCard: <MastercardIcon />,
  visa: <VisaIcon />,
  other: <DotsThree color='black' size={24} weight='bold' />,
};
