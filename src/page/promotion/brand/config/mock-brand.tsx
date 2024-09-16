import { OffersMockData } from '../../offers/config/mock-data';

import { IBrandFull } from '@/src/entities/brand';

export const MockBrandInfo: IBrandFull = {
  id: 1,
  promotionId: 'x-pharm',
  name: 'Нурофен',
  description: 'Средство от головной боли',
  logo: '/nurofen_logo.png',
  createdAt: '123123412',
  updatedAt: '34324',
  products: [
    {
      id: 1,
      name: 'Гель 200мл',
      fixCashback: 200,
      sku: '123412412',
      cashbackType: 'amount',
    },
    {
      id: 2,
      name: 'Гель 100мл',
      fixCashback: 20,
      sku: '123412432',
      cashbackType: 'percent',
    },
    {
      id: 3,
      name: 'Таблетки 20шт',
      fixCashback: 10,
      sku: '123612432',
      cashbackType: 'percent',
    },
    {
      id: 4,
      name: 'Таблетки 10шт',
      fixCashback: 100,
      sku: '122612432',
      cashbackType: 'amount',
    },
  ],
  offers: OffersMockData,
};
