import { GetCashbackButton } from './get-cashback-button';

import { BrandInfo, IBrandFull } from '@/src/entities/brand';
import { OffersHorisontalList } from '@/src/widgets/offers-horisontal-list';
import { ProductsList } from '@/src/widgets/product-list';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  promotionId: string;
  brandId: string;
  brand: IBrandFull;
};

export const PromotionBrandPageContent = ({ brand, promotionId, brandId }: Props) => {
  const { name, description, logo, products, offers } = brand;

  return (
    <Flex col className='mt-4' gap={8}>
      <BrandInfo description={description} logo={logo} title={name} />
      <GetCashbackButton promotionId={promotionId} />
      <OffersHorisontalList brandId={brandId} offers={offers} />
      <ProductsList products={products} />
    </Flex>
  );
};
