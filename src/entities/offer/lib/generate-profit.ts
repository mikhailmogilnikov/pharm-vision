import { IOffer } from '../model/offer.type';

export const generateOfferProfit = (profit: IOffer['profit'], profitType: IOffer['profitType']) => {
  switch (profitType) {
    case 'from': {
      return `Кешбэк от ${profit}%`;
    }
    case 'static': {
      return `Кешбэк ${profit}%`;
    }
    default:
      return;
  }
};
