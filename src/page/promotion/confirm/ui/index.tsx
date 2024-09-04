'use client';

import { ConfirmVariants } from '../config/variants';

import { SuccessBlock } from '@/src/widgets/success-block';

type Props = { promotionId: string; type: 'payment' | 'support' };

export const PromotionConfirmPage = ({ promotionId, type }: Props) => {
  return (
    <SuccessBlock
      description={ConfirmVariants[type].description}
      title={ConfirmVariants[type].title}
    />
  );
};
