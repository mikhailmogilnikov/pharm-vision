import dynamic from 'next/dynamic';

import { MockBrandInfo } from '../config/mock-brand';

import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { NavTabPersistUpdater } from '@/src/shared/lib/providers/nav-tab-persist-updater';
import { Loader } from '@/src/shared/ui/loader';

type Props = {
  promotionId: string;
  brandId: string;
};

const DynamicContent = dynamic(
  () => import('./content').then((module) => module.PromotionBrandPageContent),
  {
    loading: () => <Loader />,
  },
);

export const PromotionBrandPage = ({ promotionId, brandId }: Props) => {
  return (
    <NavTabPersistUpdater
      storageKey={`customer-${promotionId}-nav`}
      value={`/promotion/${promotionId}/brands`}
    >
      <SectionWithTitleLayout isBack fallbackUrl={`/promotion/${promotionId}/goods`} title='Назад'>
        <DynamicContent brand={MockBrandInfo} brandId={brandId} promotionId={promotionId} />
      </SectionWithTitleLayout>
    </NavTabPersistUpdater>
  );
};
