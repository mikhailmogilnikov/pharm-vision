import Image from 'next/image';

import { Flex } from '@/src/shared/ui/primitives/flex';

export const CustomerHeader = () => {
  return (
    <Flex tag='header'>
      <Image
        priority
        alt='logo'
        draggable={false}
        height={50}
        quality={100}
        src={'/r-farm-logo.png'}
        width={250}
      />
    </Flex>
  );
};
