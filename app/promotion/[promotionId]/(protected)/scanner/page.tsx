import { PromotionScannerPage } from '@/src/page/promotion/scanner';

type Props = { params: { promotionId: string } };

export default function Scanner({ params: { promotionId } }: Props) {
  return <PromotionScannerPage promotionId={promotionId} />;
}
