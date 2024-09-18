import { IProductWithBrand } from '../../product';

import { EOfferBannerColors } from './banner-backgrounds';

export type TOfferCondition = {
  variant: 'amount' | 'price';
  type: 'from' | 'to' | 'from_to';
  from_value?: number;
  to_value?: number;
};

export interface IOffer {
  id: number;
  profit: number;
  profitType: 'static' | 'from';
  condition?: TOfferCondition;
  banner_image: string;
  banner_color: EOfferBannerColors;
  date_from: number;
  date_to: number;
  products: IProductWithBrand[];
}
