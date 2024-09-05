'use client';

import { createPortal } from 'react-dom';

import { CustomerNavigation } from '.';

type Props = {
  promotionId: string;
};

export const CustomerNavigationWithPortal = ({ promotionId }: Props) => {
  if (typeof window === 'undefined') return null;

  return createPortal(<CustomerNavigation promotionId={promotionId} />, document.body);
};
