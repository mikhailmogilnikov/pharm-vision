import { IOffer } from '../model/offer.type';

export const generateOfferProfit = (
  profit: IOffer['profit'],
  profitType: IOffer['profitType'],
) => {
  switch (profitType) {
    case 'from': {
      return `Кешбек от ${profit}%`;
    }
    case 'static': {
      return `Кешбек ${profit}%`;
    }
    default:
      return;
  }
};
