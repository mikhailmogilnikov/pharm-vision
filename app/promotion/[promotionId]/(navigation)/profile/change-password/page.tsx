import { PromotionChangePasswordPage } from '@/src/page/promotion/change-password';

type Props = { params: { promotionId: string } };

export default function ChangePassword({ params: { promotionId } }: Props) {
  return <PromotionChangePasswordPage promotionId={promotionId} />;
}
