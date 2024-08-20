import { PromotionWithdrawAmountPage } from '@/src/page/promotion/withdraw-amount';

type Props = { params: { promotionId: string } };

export default function WithdrawAmount({ params: { promotionId } }: Props) {
  return <PromotionWithdrawAmountPage promotionId={promotionId} />;
}
