import { PromotionBrandsPage } from '@/src/page/promotion/brands';

type Props = { params: { promotionId: string } };

export default function PromotionPage({ params: { promotionId } }: Props) {
  return <PromotionBrandsPage promotionId={promotionId} />;
}
