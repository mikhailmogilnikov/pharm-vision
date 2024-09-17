import { IBrand } from '../../brand';

export interface IProduct {
  id: number;
  brandId: number;
  name: string;
  fixCashback: number;
  cashbackType: 'percent' | 'amount';
  sku: string;
}

export interface IProductWithBrand extends IProduct {
  brand: IBrand;
}
