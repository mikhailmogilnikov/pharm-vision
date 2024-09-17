import { IOffer } from '../../offer';
import { IProduct } from '../../product';

export interface IBrand {
  id: number;
  promotionId: string;
  name: string;
  description: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
  amount?: {
    min: number;
    max: number;
  };
  percent?: {
    min: number;
    max: number;
  };
}

export interface IBrandFull extends IBrand {
  products: IProduct[];
  offers: IOffer[];
}
