import dynamic from 'next/dynamic';
import { Button } from '@nextui-org/button';
import { GearFine } from '@phosphor-icons/react/dist/ssr';

import { ProfileNavListTabs } from '../config/nav-list';

import { CashbackAmount } from '@/src/entities/cashback';
import { LogoutButton } from '@/src/features/auth/logout';
import { ChangeThemeSkeleton } from '@/src/features/change-theme';
import { EnterQrManuallyProfileButton } from '@/src/features/enter-qr-manually';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { NavigationList } from '@/src/shared/ui/navigation-list';

type Props = { promotionId: string };

const DynamicChangeThemeButton = dynamic(
  () => import('@/src/features/change-theme').then((mod) => mod.ChangeThemeButton),
  {
    loading: () => <ChangeThemeSkeleton />,
    ssr: false,
  },
);

export const PromotionProfilePage = ({ promotionId }: Props) => {
  return (
    <SectionWithTitleLayout
      actionButtons={
        <>
          <DynamicChangeThemeButton />
          <Button
            isIconOnly
            className='shadow-base'
            radius='full'
            size='md'
            startContent={<GearFine size='60%' weight='bold' />}
          />
        </>
      }
      title='Михаил'
    >
      <CashbackAmount />
      <EnterQrManuallyProfileButton />
      <NavigationList tabs={ProfileNavListTabs(promotionId)} />
      <LogoutButton redirectUrl={`/promotion/${promotionId}`} />
    </SectionWithTitleLayout>
  );
};
