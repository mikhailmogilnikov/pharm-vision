import { PromotionContactPage } from '@/src/page/promotion/contact';

type Props = { params: { promotionId: string }; searchParams: { receiptId: string } };

export default function Contact({ params: { promotionId }, searchParams: { receiptId } }: Props) {
  return <PromotionContactPage promotionId={promotionId} receiptId={receiptId} />;
}
