import { Squircle } from '@squircle-js/react';
import NextImage from 'next/image';
import { Image } from '@nextui-org/image';

import { IOffer } from '../model/offer.type';
import { generateOfferProfit } from '../lib/generate-profit';
import { generateOfferCondition } from '../lib/generate-condition';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { formatDateToDeadline } from '@/src/shared/lib/utils/format-date';

type Props = {
  offer: IOffer;
};

export const OfferCard = ({ offer }: Props) => {
  const {
    banner_color,
    title,
    description,
    banner_image,
    profit,
    profitType,
    condition,
    date_to,
    avatar_image,
  } = offer;

  return (
    <button className='shadow-base active:shadow-none rounded-[25px] text-start active:scale-95 transition-transform-shadow'>
      <Squircle
        className='w-full h-64 bg-default relative !z-10 shadow-base flex flex-col'
        cornerRadius={24}
        cornerSmoothing={1}
      >
        <div
          className='h-44 bg-orange-100 p-4 flex-shrink-0 relative overflow-clip'
          style={{ backgroundColor: banner_color }}
        >
          <Flex col gap={1} width={'60%'}>
            <Text className='text-black' size={20} weight={700}>
              {generateOfferProfit(profit, profitType)}
            </Text>
            <Text className='text-black leading-5' size={16} weight={500}>
              {generateOfferCondition(condition)}
            </Text>
            <Text
              className='text-black mt-1'
              opacity={0.5}
              size={16}
              weight={500}
            >
              {formatDateToDeadline(date_to)}
            </Text>
          </Flex>

          <div className='absolute bottom-0 right-0 w-36 h-36'>
            <NextImage
              fill
              alt={title}
              draggable={false}
              quality={100}
              sizes='128px'
              src={banner_image}
            />
          </div>
        </div>
        <Flex center className='p-4'>
          <Image
            fill
            isBlurred
            alt={title}
            as={NextImage}
            className='rounded-full'
            classNames={{
              wrapper:
                'rounded-full bg-default-200 aspect-square h-12 !w-12 flex-shrink-0',
            }}
            objectFit='contain'
            sizes='48px'
            src={avatar_image}
          />

          <Flex col className='justify-center' gap={2}>
            <Text className='leading-4' size={16} weight={700}>
              {title}
            </Text>

            {description && (
              <Text className='leading-4' opacity={0.5} size={14} weight={500}>
                {description}
              </Text>
            )}
          </Flex>
        </Flex>
      </Squircle>
    </button>
  );
};
