'use client';

import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { CustomerNavigation } from '@/src/widgets/navigation/customer-navigation';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = PropsWithChildren<{ params: { promotionId: string } }>;

export default function PromotionNavigationLayout({
  children,
  params: { promotionId },
}: Props) {
  return (
    <Flex col className='max-w-5xl mx-auto p-4 mb-24' gap={5} tag='section'>
      {children}
      {createPortal(
        <CustomerNavigation promotionId={promotionId} />,
        document.body,
      )}
    </Flex>
  );
}
