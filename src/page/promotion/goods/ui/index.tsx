import { MockBrands } from '../config/mock-brands';

import { BrandTab } from '@/src/entities/brand';
import { Article } from '@/src/shared/ui/primitives/article';

type Props = { promotionId: string };

export const PromotionGoodsPage = ({ promotionId }: Props) => {
  return (
    <Article blockClassname='animate-appear'>
      {MockBrands.map((brand) => (
        <BrandTab key={brand.id} brand={brand} />
      ))}
    </Article>
  );
};
