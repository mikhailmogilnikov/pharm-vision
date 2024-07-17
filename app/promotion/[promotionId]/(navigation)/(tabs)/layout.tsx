import { PropsWithChildren } from 'react';

import { PromotionHomePage } from '@/src/page/promotion/home';

type Props = PropsWithChildren<{ params: { promotionId: string } }>;

export default function PromotionTabsLayout({
  children,
  params: { promotionId },
}: Props) {
  return (
    <PromotionHomePage promotionId={promotionId}>{children}</PromotionHomePage>
  );
}
