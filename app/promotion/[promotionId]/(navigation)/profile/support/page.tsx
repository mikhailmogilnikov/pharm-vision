import { PromotionSupportPage } from '@/src/page/promotion/support';

type Props = { params: { promotionId: string } };

export default function Support({ params: { promotionId } }: Props) {
  return <PromotionSupportPage promotionId={promotionId} />;
}
