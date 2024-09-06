import { redirect } from 'next/navigation';

import { PromotionConfirmPage } from '@/src/page/promotion/confirm';

enum EConfirmTypes {
  PAYMENT = 'payment',
  SUPPORT = 'support',
}

type Props = { params: { promotionId: string }; searchParams: { type: EConfirmTypes } };

export default function WithdrawConfirm({
  params: { promotionId },
  searchParams: { type },
}: Props) {
  if (!Object.values(EConfirmTypes).includes(type)) {
    redirect(`/promotion/${promotionId}/profile`);
  }

  return <PromotionConfirmPage promotionId={promotionId} type={type} />;
}
