import { OffersMockData } from '../config/mock-data';

import { OfferCard } from '@/src/entities/offer';

type Props = { promotionId: string };

export const PromotionOffersPage = ({ promotionId }: Props) => {
  return (
    <article className='grid gap-4 sm:grid-cols-2 animate-appear'>
      {OffersMockData.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </article>
  );
};
