import Link from 'next/link';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { CaretRight, DiamondsFour } from '@phosphor-icons/react/dist/ssr';
import { Chip } from '@nextui-org/chip';

import { IBrand } from '../../model/brand.type';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  brand: IBrand;
};

export const BrandTab = ({ brand }: Props) => {
  const { name, logo, id } = brand;

  return (
    <Link className='h-20 flex gap-4 items-center px-4' href={`brand/${id}`}>
      <Image
        fill
        alt={name}
        as={NextImage}
        className='rounded-full'
        classNames={{
          wrapper: 'rounded-full bg-default-200 aspect-square h-12 !w-12 flex-shrink-0 fit-contain',
        }}
        sizes='48px'
        src={logo}
      />

      <Flex col className='justify-center' gap={2}>
        <Text className='leading-4' size={16} weight={700}>
          {name}
        </Text>

        {/* {description && (
          <Text className='leading-4' opacity={0.5} size={14} weight={500}>
            {description}
          </Text>
        )} */}

        <Chip
          className='h-5 pr-0'
          classNames={{ content: 'font-semibold' }}
          color='warning'
          startContent={<DiamondsFour className='mr-[2px]' weight='fill' />}
          variant='flat'
        >
          от 50 до 1000
        </Chip>
      </Flex>
      <CaretRight className='flex-shrink-0' opacity={0.5} size={20} weight='bold' />
    </Link>
  );
};