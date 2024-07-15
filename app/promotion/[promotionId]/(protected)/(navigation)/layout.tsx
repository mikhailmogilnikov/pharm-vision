import { PropsWithChildren } from 'react';

import { CustomerNavigation } from '@/src/widgets/navigation/customer-navigation';
import { Flex } from '@/src/shared/ui/flex';

type Props = PropsWithChildren<{ params: { promotionId: string } }>;

export default function PromotionNavigationLayout({
  children,
  params: { promotionId },
}: Props) {
  return (
    <Flex col className='max-w-5xl mx-auto p-4' gap={5} tag='section'>
      {children}
      <CustomerNavigation promotionId={promotionId} />
    </Flex>
  );
}
