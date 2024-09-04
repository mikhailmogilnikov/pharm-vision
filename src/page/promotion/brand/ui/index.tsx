import { MockBrandInfo } from '../config/mock-brand';

import { GetCashbackButton } from './get-cashback-button';

import { BrandInfo } from '@/src/entities/brand';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { NavTabPersistUpdater } from '@/src/shared/lib/providers/nav-tab-persist-updater';
import { OffersHorisontalList } from '@/src/widgets/offers-horisontal-list';
import { ProductsList } from '@/src/widgets/product-list';

type Props = {
  promotionId: string;
  brandId: string;
};

export const PromotionBrandPage = ({ promotionId, brandId }: Props) => {
  const { name, description, logo, products, offers } = MockBrandInfo;

  return (
    <NavTabPersistUpdater
      storageKey={`customer-${promotionId}-nav`}
      value={`/promotion/${promotionId}/brands`}
    >
      <SectionWithTitleLayout isBack fallbackUrl={`/promotion/${promotionId}/goods`} title='Назад'>
        <Flex col className='mt-4' gap={8}>
          <BrandInfo description={description} logo={logo} title={name} />
          <GetCashbackButton promotionId={promotionId} />
          <OffersHorisontalList brandId={brandId} offers={offers} />
          <ProductsList products={products} />
        </Flex>
      </SectionWithTitleLayout>
    </NavTabPersistUpdater>
  );
};
