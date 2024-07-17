import { Squircle } from '@squircle-js/react';
import Image from 'next/image';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

export const OfferCard = () => {
  return (
    <button className='shadow-base active:shadow-none rounded-[25px] text-start active:scale-95 transition-transform-shadow'>
      <Squircle
        className='w-full h-64 bg-default relative !z-10 shadow-base flex flex-col'
        cornerRadius={24}
        cornerSmoothing={1}
      >
        <Flex
          col
          className='h-44 bg-orange-100 p-4 flex-shrink-0 relative overflow-clip'
          gap={0}
        >
          <Flex col gap={0} width={'60%'}>
            <Text className='text-black' size={20} weight={700}>
              Кешбек от 10%
            </Text>
            <Text className='text-black' size={16} weight={500}>
              От трех позиций в чеке
            </Text>
            <Text className='text-black' opacity={0.5} size={16} weight={500}>
              До 31 июля
            </Text>
          </Flex>

          <div className='absolute bottom-0 right-0 w-36 h-36'>
            <Image
              fill
              alt='Нурофен'
              quality={100}
              sizes='128px'
              src='/nurofen.png'
            />
          </div>
        </Flex>
        <Flex center className='p-4'>
          <Flex className='rounded-full bg-default-200 aspect-square h-12 !w-12 flex-shrink-0'>{' '}</Flex>
          <Flex col className='justify-center' gap={2}>
            <Text className='leading-4' size={16} weight={700}>
              Нурофен
            </Text>

            <Text className='leading-4' opacity={0.5} size={14} weight={500}>
              Средство от головной боли
            </Text>
          </Flex>
        </Flex>
      </Squircle>
    </button>
  );
};
