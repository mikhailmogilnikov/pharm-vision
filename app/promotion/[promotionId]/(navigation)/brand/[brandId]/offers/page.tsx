import { PromotionBrandOffersPage } from '@/src/page/promotion/brand-offers';

type Props = { params: { promotionId: string; brandId: string } };

export default function Contact({ params: { promotionId, brandId } }: Props) {
  return <PromotionBrandOffersPage brandId={brandId} promotionId={promotionId} />;
}
