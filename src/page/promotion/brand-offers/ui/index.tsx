import { OffersMockData } from '../../offers/config/mock-data';

import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { OfferCard } from '@/src/entities/offer';

type Props = {
  promotionId: string;
  brandId: string;
};

export const PromotionBrandOffersPage = ({ promotionId, brandId }: Props) => {
  return (
    <SectionWithTitleLayout
      isBack
      fallbackUrl={`/promotion/${promotionId}/brand/${brandId}`}
      title='Спецпредложения'
    >
      <ul className='grid gap-4 sm:grid-cols-2 mt-4'>
        {OffersMockData.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
    </SectionWithTitleLayout>
  );
};
