'use client';

import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { LazyMotion, MotionConfig } from 'framer-motion';
import { ThemeProviderProps } from 'next-themes/dist/types';

import { ThemeColorProvider } from '@/src/shared/lib/providers/theme-color-provider';
import { OriginTrackerProvider } from '@/src/shared/lib/providers/origin-tracker-provider';
import { ModalProvider } from '@/src/entities/modal';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const loadFeatures = () =>
  import('@/src/shared/config/dom-max').then((res) => res.domMax);

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <LazyMotion features={loadFeatures}>
      <MotionConfig
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      >
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider {...themeProps}>
            <ThemeColorProvider>
              <OriginTrackerProvider>
                <ModalProvider>{children}</ModalProvider>
              </OriginTrackerProvider>
            </ThemeColorProvider>
          </NextThemesProvider>
        </NextUIProvider>
      </MotionConfig>
    </LazyMotion>
  );
}
