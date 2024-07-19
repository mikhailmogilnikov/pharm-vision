import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

import { IOffer } from '../../model/offer.type';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  offer: IOffer;
  isBlurred?: boolean;
};

export const OfferBrand = ({ offer, isBlurred = true }: Props) => {
  const { title, description, avatar_image } = offer;

  return (
    <Flex center tag='article'>
      <Image
        fill
        alt={title}
        as={NextImage}
        className='rounded-full'
        classNames={{
          wrapper: 'rounded-full bg-default-200 aspect-square h-12 !w-12 flex-shrink-0 fit-contain',
        }}
        isBlurred={isBlurred}
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
  );
};
