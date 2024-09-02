import { PromotionBrandPage } from '@/src/page/promotion/brand';

type Props = { params: { promotionId: string; brandId: string } };

export default function Contact({ params: { promotionId, brandId } }: Props) {
  return <PromotionBrandPage brandId={brandId} promotionId={promotionId} />;
}
