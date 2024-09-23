'use client';

import { MouseEventHandler } from 'react';
import { Chip } from '@nextui-org/chip';
import NextImage from 'next/image';
import { Image } from '@nextui-org/image';

import { IBrand } from '../../model/brand.type';
import { getMaxCashback } from '../../lib/get-max-cashback';

import { Article } from '@/src/shared/ui/primitives/article';
import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { CashbackIcon } from '@/src/shared/ui/cashback-icon';

type Props = {
  brand: IBrand;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const BrandMiniCard = ({ brand, onClick }: Props) => {
  const maxCashback = getMaxCashback(brand);

  return (
    <button
      key={brand.id}
      className='active:scale-95 active:shadow-none transition-transform-shadow shadow-base rounded-[20px] text-center'
      onClick={onClick}
    >
      <Article
        blockClassname='bg-default relative !w-32 !h-36 !flex-shrink-0 rounded-xl py-3 flex flex-col justify-between items-center'
        className='!w-32 '
      >
        <Image
          fill
          isBlurred
          alt={brand.name}
          as={NextImage}
          className='rounded-full'
          classNames={{
            wrapper:
              'rounded-full bg-default-200 aspect-square h-16 !w-16 flex-shrink-0 fit-contain',
          }}
          quality={100}
          sizes='80px'
          src={brand.logo}
        />

        <Flex center col gap={2}>
          <Text className='z-10' size={14} weight={600}>
            {brand.name}
          </Text>

          <Chip
            className='h-5 px-0'
            classNames={{ content: 'font-semibold flex gap-1 items-center' }}
            color='warning'
            variant='flat'
          >
            До{' '}
            {typeof maxCashback === 'number' && (
              <span>
                <CashbackIcon className='-mr-[2px]' weight='fill' />{' '}
              </span>
            )}
            {maxCashback}
          </Chip>
        </Flex>
      </Article>
    </button>
  );
};
