'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SealPercent } from '@phosphor-icons/react/dist/ssr';
import { User } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

import { ScanQrButton } from '@/src/features/scan-qr';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { useModal } from '@/src/entities/modal';
import { AuthBannerModal } from '@/src/features/auth/login';

type Props = {
  promotionId: string;
};

export const CustomerNavigation = ({ promotionId }: Props) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const token = getCookie('token');

  const { setModal } = useModal();

  const [homeNavTab, setHomeNavTab] = useState<string | null>();

  useEffect(() => {
    const homeNavigationTab = localStorage.getItem(
      `customer-${promotionId}-nav`,
    );

    setHomeNavTab(homeNavigationTab);
  }, [pathname]);

  const handleNavigateToHome = () => {
    homeNavTab ? replace(homeNavTab) : replace(`/promotion/${promotionId}`);
  };

  const handleNavigateToProfile = () => {
    if (!token) {
      return setModal(<AuthBannerModal promotionId={promotionId} />);
    }

    replace(`/promotion/${promotionId}/profile`);
  };

  return (
    <Flex
      center
      className='fixed bottom-6 left-1/2 -translate-x-[50%] !w-56 h-14 bg-default/50 backdrop-blur-lg rounded-2xl border-1 border-white/10 shadow-base z-40'
      gap={14}
      tag='nav'
    >
      <button
        className='w-full h-full flex items-center justify-center'
        onClick={handleNavigateToHome}
      >
        <SealPercent size={24} weight='bold' />
      </button>

      <ScanQrButton promotionId={promotionId} />

      <button
        className='w-full h-full flex items-center justify-center'
        onClick={handleNavigateToProfile}
      >
        <User size={24} weight='bold' />
      </button>
    </Flex>
  );
};
