import { PromotionContactPage } from '@/src/page/promotion/contact';

type Props = { params: { promotionId: string } };

export default function Contact({ params: { promotionId } }: Props) {
  return <PromotionContactPage promotionId={promotionId} />;
}
