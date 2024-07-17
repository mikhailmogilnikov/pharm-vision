import { OfferCard } from '@/src/entities/offer';

type Props = { promotionId: string };

export const PromotionOffersPage = ({ promotionId }: Props) => {
  return (
    <article className='grid gap-4 md:grid-cols-2'>
      <OfferCard />
      <OfferCard />
      <OfferCard />
    </article>
  );
};
