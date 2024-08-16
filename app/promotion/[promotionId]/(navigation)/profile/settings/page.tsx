import { PromotionSettingsPage } from '@/src/page/promotion/settings';

type Props = { params: { promotionId: string } };

export default function Settings({ params: { promotionId } }: Props) {
  return <PromotionSettingsPage promotionId={promotionId} />;
}
