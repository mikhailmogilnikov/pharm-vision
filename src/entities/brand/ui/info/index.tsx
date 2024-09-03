import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  title: string;
  description: string;
  logo: string;
};

export const BrandInfo = ({ title, description, logo }: Props) => {
  return (
    <>
      <Flex center>
        <Image
          fill
          isBlurred
          alt={title}
          as={NextImage}
          className='rounded-full'
          classNames={{
            wrapper:
              'rounded-full bg-default-200 aspect-square h-20 !w-20 flex-shrink-0 fit-contain',
          }}
          quality={100}
          sizes='80px'
          src={logo}
        />
        <Flex col gap={0}>
          <Text size={24} tag='h1' weight={700}>
            {title}
          </Text>
          <Text opacity={0.5} size={16} tag='h2' weight={600}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
