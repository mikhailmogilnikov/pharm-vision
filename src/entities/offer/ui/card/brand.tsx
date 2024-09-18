import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

import { IOffer } from '../../model/offer.type';
import { getUniqueBrands } from '../../lib/get-unique-brands';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { MultibrandItem } from '@/src/entities/brand';

type Props = {
  offer: IOffer;
  isBlurred?: boolean;
};

export const OfferBrand = ({ offer, isBlurred = true }: Props) => {
  const { products } = offer;
  const brandsList = products.map(({ brand }) => brand);
  const uniqueBrands = getUniqueBrands(brandsList);

  return products.length > 1 ? (
    <MultibrandItem brands={uniqueBrands} />
  ) : (
    <Flex center tag='article'>
      <Image
        fill
        alt={products[0].brand.name}
        as={NextImage}
        className='rounded-full'
        classNames={{
          wrapper: 'rounded-full bg-default-200 aspect-square h-12 !w-12 flex-shrink-0 fit-contain',
        }}
        isBlurred={isBlurred}
        sizes='48px'
        src={products[0].brand.logo}
      />

      <Flex col className='justify-center' gap={2}>
        <Text className='leading-4' size={16} weight={700}>
          {products[0].brand.name}
        </Text>

        {products[0].brand.description && (
          <Text className='leading-4 line-clamp-1' opacity={0.5} size={14} weight={500}>
            {products[0].brand.description}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
