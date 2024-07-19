'use client';

import { Squircle } from '@squircle-js/react';
import NextImage from 'next/image';
import { Image } from '@nextui-org/image';

import { IOffer } from '../../model/offer.type';
import { OfferModal } from '../modal';

import { OfferBanner } from './banner';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { useModal } from '@/src/entities/modal';

type Props = {
  offer: IOffer;
};

export const OfferCard = ({ offer }: Props) => {
  const { setModal } = useModal();

  const { title, description, avatar_image } = offer;

  const handlePress = () => {
    setModal(<OfferModal offer={offer} />);
  };

  return (
    <li className='shadow-base active:shadow-none rounded-[25px] active:scale-95 transition-transform-shadow w-full'>
      <button className='w-full text-start' onClick={handlePress}>
        <Squircle
          className='w-full h-64 bg-default relative !z-10 shadow-base flex flex-col'
          cornerRadius={24}
          cornerSmoothing={1}
        >
          <OfferBanner offer={offer} />

          <Flex center className='p-4'>
            <Image
              fill
              isBlurred
              alt={title}
              as={NextImage}
              className='rounded-full'
              classNames={{
                wrapper:
                  'rounded-full bg-default-200 aspect-square h-12 !w-12 flex-shrink-0 fit-contain',
              }}
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
    </li>
  );
};
