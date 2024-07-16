'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { CustomerRoutes } from '../config/routes';

import { ScanQrButton } from '@/src/features/scan-qr';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  promotionId: string;
};

export const CustomerNavigation = ({ promotionId }: Props) => {
  const pathname = usePathname();

  const [homeNavTab, setHomeNavTab] = useState<string | null>();

  useEffect(() => {
    const homeNavigationTab = localStorage.getItem(
      `customer-${promotionId}-nav`,
    );

    setHomeNavTab(homeNavigationTab);
  }, [pathname]);

  return (
    <Flex
      center
      className='fixed bottom-6 left-1/2 -translate-x-[50%] !w-56 h-14 bg-default/50 backdrop-blur-lg rounded-2xl border-1 border-white/10 shadow-base z-40'
      gap={14}
      tag='nav'
    >
      {CustomerRoutes.map(({ id, path, icon: Icon }) => {
        if (id === 'home' && homeNavTab) {
          const iconClassnames = clsx({
            'opacity-50': homeNavTab !== pathname,
          });

          return (
            <Link
              key={id}
              className='w-full h-full flex items-center justify-center'
              href={homeNavTab}
            >
              <Icon className={iconClassnames} size={26} weight='bold' />
            </Link>
          );
        }

        const routePath = `/promotion/${promotionId}${path}`;
        const iconClassnames = clsx({
          'opacity-50': routePath !== pathname,
        });

        return (
          <Link
            key={id}
            className='w-full h-full flex items-center justify-center'
            href={routePath}
          >
            <Icon className={iconClassnames} size={26} weight='bold' />
          </Link>
        );
      })}
      <ScanQrButton promotionId={promotionId} />
    </Flex>
  );
};
