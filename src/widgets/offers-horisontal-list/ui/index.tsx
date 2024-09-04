import { IOffer, OfferCard } from '@/src/entities/offer';
import { HorisontalList } from '@/src/shared/ui/primitives/horisontal-list';

type Props = {
  brandId: string;
  offers: IOffer[];
};

export const OffersHorisontalList = ({ brandId, offers }: Props) => {
  return (
    <HorisontalList href={`${brandId}/offers`} title='Спецпредложения'>
      {offers.map((offer) => (
        <div key={offer.id} className='w-[336px] flex-shrink-0'>
          <OfferCard offer={offer} />
        </div>
      ))}
    </HorisontalList>
  );
};
