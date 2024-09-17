import { IBrand } from '@/src/entities/brand';
import { IProductWithBrand } from '@/src/entities/product';

export interface ISearchResponse {
  brands: IBrand[];
  products: IProductWithBrand[];
}
