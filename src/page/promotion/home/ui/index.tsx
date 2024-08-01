import { Squircle } from '@squircle-js/react';
import { ReactNode } from 'react';

import { PromotionHomeNavigationRoutes } from '../config/routes';

import { HomeBanner } from './banner';

import { Search } from '@/src/features/search';
import { NavigationTabs } from '@/src/shared/ui/navigation-tabs';
import { CustomerHeader } from '@/src/widgets/customer/header';

type Props = { promotionId: string; children: ReactNode };

export const PromotionHomePage = ({ promotionId, children }: Props) => {
  return (
    <>
      <CustomerHeader promotionId={promotionId} />

      <Search />

      <HomeBanner />

      <Squircle
        className='w-full h-12 shadow-lg relative bg-default flex pt-[2px]'
        cornerRadius={14}
        cornerSmoothing={1}
      >
        <NavigationTabs
          items={PromotionHomeNavigationRoutes(promotionId)}
          localStorageKey={`customer-${promotionId}-nav`}
        />
      </Squircle>

      {children}
    </>
  );
};
