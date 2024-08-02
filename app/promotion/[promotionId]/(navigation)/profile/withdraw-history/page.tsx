import { PromotionWihdrawHistoryPage } from '@/src/page/promotion/withdraw-history';

type Props = { params: { promotionId: string } };

export default function WithdrawHistory({ params: { promotionId } }: Props) {
  return <PromotionWihdrawHistoryPage promotionId={promotionId} />;
}
