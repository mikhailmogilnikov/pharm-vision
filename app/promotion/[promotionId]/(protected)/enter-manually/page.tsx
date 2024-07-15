import { PromotionEnterManuallyPage } from '@/src/page/promotion/enter-manually';

type Props = { params: { promotionId: string } };

export default function EnterManually({ params: { promotionId } }: Props) {
  return <PromotionEnterManuallyPage promotionId={promotionId} />;
}
