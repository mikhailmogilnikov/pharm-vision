'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { RemoveScroll } from 'react-remove-scroll';

import { QrScanner } from '@/src/features/scan-qr';
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
    <RemoveScroll className='w-dvw h-dvh bg-black'>
      <QrScanner
        fallbackUrl={`/promotion/${promotionId}`}
        onChange={(result) => setScanValue(result[0].rawValue)}
      />
      <EnterQrManuallyButton promotionId={promotionId} />
    </RemoveScroll>
  );
};
