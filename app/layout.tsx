import './globals.css';

import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { SquircleNoScript } from '@squircle-js/react';

import { Providers } from './providers';

import { siteConfig } from '@/src/shared/config/site';
import { fontSans } from '@/src/shared/config/fonts';
import { Flex } from '@/src/shared/ui/flex';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='ru'>
      <head>
        <meta content='#000000' name='theme-color' />
        <meta content='telephone=no' name='format-detection' />
      </head>
      <body
        className={clsx(
          'min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class' }}>
          <SquircleNoScript />
          <Flex className='relative' gap={0} tag='main'>
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
