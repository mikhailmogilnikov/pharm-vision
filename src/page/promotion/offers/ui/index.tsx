import { OffersMockData } from '../config/mock-data';

import { NavTabPersistUpdater } from '@/src/shared/lib/providers/nav-tab-persist-updater';
import { OfferCard } from '@/src/entities/offer';

type Props = { promotionId: string };

export const PromotionOffersPage = ({ promotionId }: Props) => {
  return (
    <NavTabPersistUpdater
      storageKey={`customer-${promotionId}-nav`}
      value={`/promotion/${promotionId}`}
    >
      <ul className='grid gap-4 sm:grid-cols-2 animate-appear'>
        {OffersMockData.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
    </NavTabPersistUpdater>
  );
};
