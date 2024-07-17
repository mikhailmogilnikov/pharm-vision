import { PromotionGoodsPage } from '@/src/page/promotion/goods';

type Props = { params: { promotionId: string } };

export default function PromotionPage({ params: { promotionId } }: Props) {
  return <PromotionGoodsPage promotionId={promotionId} />;
}
