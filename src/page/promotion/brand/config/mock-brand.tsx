import { OffersMockData } from '../../offers/config/mock-data';

import { IProduct, IProductWithBrand } from '@/src/entities/product';
import { IBrandFull } from '@/src/entities/brand';

export const MockProducts: IProduct[] = [
  {
    id: 1,
    brandId: 1,
    name: 'Гель 200мл',
    fixCashback: 200,
    sku: '123412412',
    cashbackType: 'amount',
  },
  {
    id: 2,
    brandId: 1,
    name: 'Гель 100мл',
    fixCashback: 20,
    sku: '123412432',
    cashbackType: 'percent',
  },
  {
    id: 3,
    brandId: 1,
    name: 'Таблетки 20шт',
    fixCashback: 10,
    sku: '123612432',
    cashbackType: 'percent',
  },
  {
    id: 4,
    brandId: 1,
    name: 'Таблетки 10шт',
    fixCashback: 100,
    sku: '122612432',
    cashbackType: 'amount',
  },
];

export const MockProductsWithBrand: IProductWithBrand[] = [
  {
    id: 1,
    brandId: 1,
    name: 'Терафлю порошок 20пак.',
    fixCashback: 200,
    sku: '123412412',
    cashbackType: 'amount',
    brand: {
      id: 1,
      promotionId: 'x-pharm',
      name: 'Нурофен',
      description: 'Средство от головной боли',
      logo: '/theraflu_logo.png',
      createdAt: '123123412',
      updatedAt: '34324',
    },
  },
  {
    id: 2,
    brandId: 1,
    name: 'Граммидин таб. 20шт',
    fixCashback: 20,
    sku: '123412432',
    cashbackType: 'percent',
    brand: {
      id: 1,
      promotionId: 'x-pharm',
      name: 'Нурофен',
      description: 'Средство от головной боли',
      logo: '/grammidin_logo.png',
      createdAt: '123123412',
      updatedAt: '34324',
    },
  },
  {
    id: 3,
    brandId: 1,
    name: 'Нурофен таб. 20шт',
    fixCashback: 10,
    sku: '123612432',
    cashbackType: 'percent',
    brand: {
      id: 1,
      promotionId: 'x-pharm',
      name: 'Нурофен',
      description: 'Средство от головной боли',
      logo: '/nurofen_logo.png',
      createdAt: '123123412',
      updatedAt: '34324',
    },
  },
  {
    id: 4,
    brandId: 1,
    name: 'Нурофен таб. 10шт',
    fixCashback: 100,
    sku: '122612432',
    cashbackType: 'amount',
    brand: {
      id: 1,
      promotionId: 'x-pharm',
      name: 'Нурофен',
      description: 'Средство от головной боли',
      logo: '/nurofen_logo.png',
      createdAt: '123123412',
      updatedAt: '34324',
    },
  },
];

export const MockBrandInfo: IBrandFull = {
  id: 1,
  promotionId: 'x-pharm',
  name: 'Нурофен',
  description: 'Средство от головной боли',
  logo: '/nurofen_logo.png',
  createdAt: '123123412',
  updatedAt: '34324',
  products: MockProducts,
  offers: OffersMockData,
};
