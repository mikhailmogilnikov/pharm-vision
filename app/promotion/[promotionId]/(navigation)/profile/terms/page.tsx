import { PromotionTermsPage } from '@/src/page/promotion/terms';

type Props = { params: { promotionId: string } };

export default function Terms({ params: { promotionId } }: Props) {
  return <PromotionTermsPage promotionId={promotionId} />;
}
