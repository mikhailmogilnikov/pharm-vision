'use client';

import { useState } from 'react';

import { QrScanner } from '@/src/features/scan-qr';
import { Flex } from '@/src/shared/ui/flex';
import { EnterQrManuallyButton } from '@/src/features/enter-qr-manually';

type Props = { promotionId: string };

export const PromotionScannerPage = ({ promotionId }: Props) => {
  const [scanValue, setScanValue] = useState<string | null>(null);

  return (
    <Flex className='w-dvw h-dvh bg-black'>
      <QrScanner onChange={(result) => setScanValue(result[0].rawValue)} />
      <EnterQrManuallyButton promotionId={promotionId} />
    </Flex>
  );
};
