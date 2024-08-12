import { MoreHorizontal } from 'lucide-react';

import { TPhonesIcons } from '../model/variants-icons.type';

import { BeelineIcon } from '@/src/shared/assets/withdraw-variants/beeline';
import { MegafonIcon } from '@/src/shared/assets/withdraw-variants/megafon';
import { MtsIcon } from '@/src/shared/assets/withdraw-variants/mts';
import { Tele2Icon } from '@/src/shared/assets/withdraw-variants/tele2';

export const PhoneIcons: TPhonesIcons = {
  megafon: <MegafonIcon />,
  tele2: <Tele2Icon />,
  mts: <MtsIcon />,
  beeline: <BeelineIcon />,
  other: <MoreHorizontal color='black' />,
};
