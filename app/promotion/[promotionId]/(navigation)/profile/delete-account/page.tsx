import { DeleteAccountPage } from '@/src/page/promotion/delete-account';

type Props = { params: { promotionId: string } };

export default function ChangePassword({ params: { promotionId } }: Props) {
  return <DeleteAccountPage promotionId={promotionId} />;
}
