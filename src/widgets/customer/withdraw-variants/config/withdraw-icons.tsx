import { DotsThree } from '@phosphor-icons/react/dist/ssr';

import { BeelineIcon } from '@/src/shared/assets/withdraw-variants/beeline';
import { MegafonIcon } from '@/src/shared/assets/withdraw-variants/megafon';
import { MtsIcon } from '@/src/shared/assets/withdraw-variants/mts';
import { Tele2Icon } from '@/src/shared/assets/withdraw-variants/tele2';
import { MirIcon } from '@/src/shared/assets/withdraw-variants/mir';
import { MastercardIcon } from '@/src/shared/assets/withdraw-variants/mastercard';
import { VisaIcon } from '@/src/shared/assets/withdraw-variants/visa';

export const WithdrawIcons = {
  megafon: <MegafonIcon />,
  tele2: <Tele2Icon />,
  mts: <MtsIcon />,
  beeline: <BeelineIcon />,
  other: <DotsThree color='black' size={24} weight='bold' />,
  mir: <MirIcon />,
  masterCard: <MastercardIcon />,
  visa: <VisaIcon />,
};
