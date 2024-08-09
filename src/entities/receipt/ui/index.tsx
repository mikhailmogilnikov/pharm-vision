import { Squircle } from '@squircle-js/react';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { DiamondsFour } from '@phosphor-icons/react/dist/ssr';

import { TReceipt } from '../model/receipt.type';

import { SeeMoreLayout } from './see-more-layout';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

export const Receipt = ({ img, name, cashback, number, price }: TReceipt) => {
  return (
    <SeeMoreLayout>
      <Squircle
        className='bg-default flex items-center h-min p-5 w-full hover:-ml-1 transition-all'
        // className='flex items-center h-min w-full hover:-ml-1 transition-all'
        cornerRadius={18}
        cornerSmoothing={1}
      >
        <Image
          fill
          isBlurred
          alt={name}
          as={NextImage}
          className='rounded-full'
          classNames={{
            wrapper:
              'rounded-full bg-default-200 aspect-square h-12 !w-12 flex-shrink-0 fit-contain',
          }}
          sizes='52px'
          src={img}
        />
        <Flex col className='ml-4'>
          <Flex className='justify-between'>
            <Text size={22} tag={'h2'}>
              {name}
            </Text>
            <Text className='text-nowrap' size={22} tag='h3'>
              {price} ₽
            </Text>
          </Flex>
          <Flex className='justify-between -mt-4'>
            <Text opacity={0.5}>№{number}</Text>
            <Flex center className='bg-default-200 px-3 rounded-full' width={'fit-content'}>
              <DiamondsFour className='text-[--accent] -mr-3' size={14} weight='bold' />
              <Text className='text-[--accent] leading-1'>{cashback}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Squircle>
    </SeeMoreLayout>
  );
};
