import { ProfileNavListTabs } from '../config/nav-list';

import { CashbackAmount } from '@/src/entities/cashback';
import { UserProfile } from '@/src/entities/user';
import { LogoutButton } from '@/src/features/auth/logout';
import { EnterQrManuallyProfileButton } from '@/src/features/enter-qr-manually';
import { NavigationList } from '@/src/shared/ui/navigation-list';

type Props = { promotionId: string };

export const PromotionProfilePage = ({ promotionId }: Props) => {
  return (
    <>
      <UserProfile />
      <CashbackAmount />
      <EnterQrManuallyProfileButton />
      <NavigationList tabs={ProfileNavListTabs(promotionId)} />
      <LogoutButton />
    </>
  );
};
