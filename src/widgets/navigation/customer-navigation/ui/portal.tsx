'use client';

import { createPortal } from 'react-dom';

import { CustomerNavigation } from '.';

type Props = {
  promotionId: string;
};

export const CustomerNavigationWithPortal = ({ promotionId }: Props) => {
  return createPortal(
    <CustomerNavigation promotionId={promotionId} />,
    document.body,
  );
};
