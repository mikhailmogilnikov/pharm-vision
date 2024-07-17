import { PromotionOffersPage } from '@/src/page/promotion/offers';

type Props = { params: { promotionId: string } };

export default function PromotionPage({ params: { promotionId } }: Props) {
  return <PromotionOffersPage promotionId={promotionId} />;
}
