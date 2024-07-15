'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { QrScanner } from '@/src/features/scan-qr';
import { Flex } from '@/src/shared/ui/flex';
import { EnterQrManuallyButton } from '@/src/features/enter-qr-manually';
import { updateThemeColor } from '@/src/shared/lib/utils/update-theme-color';

type Props = { promotionId: string };

export const PromotionScannerPage = ({ promotionId }: Props) => {
  const { resolvedTheme } = useTheme();
  const [scanValue, setScanValue] = useState<string | null>(null);

  useEffect(() => {
    updateThemeColor('dark');

    return () => {
      updateThemeColor(resolvedTheme as string);
    };
  }, []);

  return (
    <Flex className='w-dvw h-dvh bg-black'>
      <QrScanner
        fallbackUrl={`/promotions/${promotionId}`}
        onChange={(result) => setScanValue(result[0].rawValue)}
      />
      <EnterQrManuallyButton promotionId={promotionId} />
    </Flex>
  );
};
