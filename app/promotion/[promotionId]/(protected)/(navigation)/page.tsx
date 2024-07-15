import { PromotionHomePage } from '@/src/page/promotion/home';

type Props = { params: { promotionId: string } };

export default function PromotionPage({ params: { promotionId } }: Props) {
  return <PromotionHomePage promotionId={promotionId} />;
}
