import { IBrand } from '@/src/entities/brand';

export const MockBrands: IBrand[] = [
  {
    id: 1,
    promotionId: 'x-pharm',
    logo: '/nurofen_logo.png',
    createdAt: '32132131',
    name: 'Нурофен',
    updatedAt: '3123124',
    description: 'Средство от головной боли',
    percent: {
      min: 10,
      max: 30,
    },
  },
  {
    id: 2,
    promotionId: 'x-pharm',
    logo: '/theraflu_logo.png',
    createdAt: '31312',
    updatedAt: '3123124',
    name: 'Терафлю',
    description: 'От гриппа и простуды',
    amount: {
      min: 50,
      max: 300,
    },
  },
  {
    id: 3,
    promotionId: 'x-pharm',
    logo: '/grammidin_logo.png',
    createdAt: '31312',
    updatedAt: '3123124',
    name: 'Граммидин',
    description: 'Таблетки от боли в горле',
    percent: {
      min: 3,
      max: 20,
    },
  },
];
