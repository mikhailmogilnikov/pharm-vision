import { TOfferCondition } from '../../model/offer.type';

export const OfferMockCorrectConditions: Record<number, TOfferCondition> = {
  1: { variant: 'amount', type: 'from_to', from_value: 1, to_value: 5 },
  2: {
    variant: 'price',
    type: 'from',
    from_value: 500,
  },
  3: {
    variant: 'amount',
    type: 'from',
    from_value: 2,
  },
};
