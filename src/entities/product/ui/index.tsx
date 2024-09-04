import { DiamondsFour } from '@phosphor-icons/react';

import { IProduct } from '../model/product.type';

import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  product: IProduct;
};

export const Product = ({ product }: Props) => {
  const { name, sku, fixCashback } = product;

  return (
    <Flex>
      <Flex col gap={1}>
        <Text size={18} weight={600}>
          {name}
        </Text>
        <Text opacity={0.5} size={15}>
          {sku}
        </Text>
      </Flex>
      <Flex center gap={1} width={'min-width'}>
        <DiamondsFour className='text-[--accent]' weight='fill' />
        <Text className='text-[--accent]' size={18} weight={600}>
          {fixCashback}
        </Text>
      </Flex>
    </Flex>
  );
};
