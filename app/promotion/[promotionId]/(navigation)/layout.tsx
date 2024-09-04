import { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = PropsWithChildren<{ params: { promotionId: string } }>;

const DynamicCustomerNavigation = dynamic(
  () =>
    import('@/src/widgets/navigation').then(
      (mod) => mod.CustomerNavigationWithPortal,
    ),
  { ssr: false },
);

export default function PromotionNavigationLayout({ children, params: { promotionId } }: Props) {
  return (
    <Flex col className='max-w-5xl mx-auto p-4 mb-24' gap={5} tag='section'>
      {children}
      <DynamicCustomerNavigation promotionId={promotionId} />
    </Flex>
  );
}
