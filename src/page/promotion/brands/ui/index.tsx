import { MockBrands } from '../config/mock-brands';

import { BrandTab } from '@/src/entities/brand';
import { NavTabPersistUpdater } from '@/src/shared/lib/providers/nav-tab-persist-updater';
import { Article } from '@/src/shared/ui/primitives/article';

type Props = { promotionId: string };

export const PromotionBrandsPage = ({ promotionId }: Props) => {
  return (
    <NavTabPersistUpdater
      storageKey={`customer-${promotionId}-nav`}
      value={`/promotion/${promotionId}/brands`}
    >
      <Article blockClassname='animate-appear' radius={24}>
        {MockBrands.map((brand) => (
          <BrandTab key={brand.id} brand={brand} />
        ))}
      </Article>
    </NavTabPersistUpdater>
  );
};
