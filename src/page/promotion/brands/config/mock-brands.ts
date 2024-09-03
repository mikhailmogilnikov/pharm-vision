import { IBrand } from '@/src/entities/brand';

export const MockBrands: IBrand[] = [
  {
    id: 1,
    promotionId: 'x-pharm',
    logo: '/nurofen_logo.png',
    createdAt: '32132131',
    name: 'Нурофен',
    description: 'Средство от головной боли',
  },
  {
    id: 2,
    promotionId: 'x-pharm',
    logo: '/theraflu_logo.png',
    createdAt: '31312',
    name: 'Терафлю',
    description: 'От гриппа и простуды',
  },
  {
    id: 3,
    promotionId: 'x-pharm',
    logo: '/grammidin_logo.png',
    createdAt: '31312',
    name: 'Граммидин',
    description: 'Таблетки от боли в горле',
  },
];
