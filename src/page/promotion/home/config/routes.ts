import { TNavigation } from '@/src/shared/model/types/index.type';

export const PromotionHomeNavigationRoutes = (
  promotionId: string,
): TNavigation[] => [
  { id: 0, name: 'Спецпредложения', href: `/promotion/${promotionId}` },
  { id: 1, name: 'Кешбек', href: `/promotion/${promotionId}/goods` },
];
