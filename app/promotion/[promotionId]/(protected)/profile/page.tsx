import { PromotionProfilePage } from '@/src/page/promotion/profile/ui';

type Props = { params: { promotionId: string } };

export default function UserProfile({ params: { promotionId } }: Props) {
  return <PromotionProfilePage promotionId={promotionId} />;
}
