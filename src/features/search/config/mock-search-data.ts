import { ISearchResponse } from '../model/search-response.type';

import { MockProductsWithBrand } from '@/src/page/promotion/brand/config/mock-brand';
import { MockBrands } from '@/src/page/promotion/brands/config/mock-brands';

export const MockSearchData: ISearchResponse = {
  brands: MockBrands,
  products: MockProductsWithBrand,
};
