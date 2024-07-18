export type TOfferBannerColors = '#ffedd5' | '#f6ffd5' | '#d5f0ff' | '#e1d5ff';

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
  banner_color: TOfferBannerColors;
  title: string;
  description: string;
  avatar_image: string;
  date_from: number;
  date_to: number;
}
