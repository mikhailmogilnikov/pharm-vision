import { PromotionConfirmPage } from '@/src/page/promotion/confirm';

type Props = { params: { promotionId: string }; searchParams: { type: 'payment' | 'support' } };

export default function WithdrawConfirm({
  params: { promotionId },
  searchParams: { type },
}: Props) {
  return <PromotionConfirmPage promotionId={promotionId} type={type} />;
}
