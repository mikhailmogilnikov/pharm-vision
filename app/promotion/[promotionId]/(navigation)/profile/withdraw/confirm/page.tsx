import { PromotionWithdrawConfirmPage } from '@/src/page/promotion/withdraw-confirm';

type Props = { params: { promotionId: string } };

export default function WithdrawConfirm({ params: { promotionId } }: Props) {
  return <PromotionWithdrawConfirmPage promotionId={promotionId} />;
}
