import { Squircle } from '@squircle-js/react';

import { Flex } from '@/src/shared/ui/primitives/flex';
import Image from 'next/image';

export const OfferCard = () => {
  return (
    <button className='shadow-base active:shadow-none rounded-[25px] text-start active:scale-95 transition-transform-shadow'>
      <Squircle
        className='w-full h-64 bg-default relative !z-10 shadow-base flex flex-col'
        cornerRadius={24}
        cornerSmoothing={1}
      >
        <Flex className='h-44 bg-orange-100'>.</Flex>
        <Flex>
          <Flex>
            <Image />
          </Flex>
        </Flex>
      </Squircle>
    </button>
  );
};
