import { IBrand } from '../model/brand.type';

export const getMaxCashback = (brand: IBrand) => {
  const { percent, amount } = brand;

  if (percent) {
    return `${percent.max}%`;
  }
  if (amount) {
    return amount.max;
  }

  return '0%';
};
