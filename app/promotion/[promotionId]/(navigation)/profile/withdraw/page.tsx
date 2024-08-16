import { PromotionWithdrawPage } from '@/src/page/promotion/withdraw';

type Props = { params: { promotionId: string } };

export default function Withdraw({ params: { promotionId } }: Props) {
  return <PromotionWithdrawPage promotionId={promotionId} />;
}
