import { Image } from '@nextui-org/image';
import { Squircle } from '@squircle-js/react';
import NextImage from 'next/image';
import { ReactNode } from 'react';

import { PromotionHomeNavigationRoutes } from '../config/routes';

import { Search } from '@/src/features/search';
import { NavigationTabs } from '@/src/shared/ui/navigation-tabs';

type Props = { promotionId: string; children: ReactNode };

export const PromotionHomePage = ({ promotionId, children }: Props) => {
  return (
    <>
      <Squircle
        className='w-full aspect-[3/2] bg-default relative !z-10'
        cornerRadius={20}
        cornerSmoothing={1}
      >
        <Image
          fill
          priority
          alt='NextUI hero Image'
          as={NextImage}
          classNames={{
            wrapper:
              'w-full aspect-[3/2] relative !max-w-none !z-10 rounded-none',
            img: 'snap-start flex-shrink-0 object-cover h-full',
          }}
          quality={100}
          src='https://pharmprom.ru/wp-content/uploads/r-pharm-v.jpg'
        />
      </Squircle>

      <Search />

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
