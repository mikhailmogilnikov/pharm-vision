import dynamic from 'next/dynamic';
import { Button } from '@nextui-org/button';
import { GearFine } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

import { ProfileNavListTabs } from '../config/nav-list';

import { CashbackAmount } from '@/src/entities/cashback';
import { LogoutButton } from '@/src/features/auth/logout';
import { ChangeThemeSkeleton } from '@/src/features/change-theme';
import { EnterQrManuallyProfileButton } from '@/src/features/enter-qr-manually';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { NavigationList } from '@/src/shared/ui/navigation-list';
import { Text } from '@/src/shared/ui/primitives/text';
import { siteConfig } from '@/src/shared/config/site';

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
            as={Link}
            className='shadow-base'
            href={`/promotion/${promotionId}/profile/settings`}
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
      <Text className='text-center mt-6' opacity={0.5}>
        Версия приложения {siteConfig.version}
      </Text>
    </SectionWithTitleLayout>
  );
};
