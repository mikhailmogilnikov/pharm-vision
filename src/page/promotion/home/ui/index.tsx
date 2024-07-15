import { Image } from '@nextui-org/image';
import { Squircle } from '@squircle-js/react';
import NextImage from 'next/image';

import { Search } from '@/src/features/search';

type Props = { promotionId: string };

export const PromotionHomePage = ({ promotionId }: Props) => {
  return (
    <>
      <Squircle
        className='w-full aspect-[3/2] relative !z-10'
        cornerRadius={20}
        cornerSmoothing={1}
      >
        <Image
          fill
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
    </>
  );
};
