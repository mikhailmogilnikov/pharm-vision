import { PropsWithChildren } from 'react';

import { CustomerNavigation } from '@/src/widgets/navigation/customer-navigation';

type Props = PropsWithChildren<{ params: { promotionId: string } }>;

export default function PromotionNavigationLayout({
  children,
  params: { promotionId },
}: Props) {
  return (
    <>
      {children}
      <CustomerNavigation promotionId={promotionId} />
    </>
  );
}
