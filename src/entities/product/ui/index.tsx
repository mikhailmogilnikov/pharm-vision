import { DiamondsFour } from '@phosphor-icons/react';
import { Tooltip } from '@nextui-org/tooltip';

import { IProduct } from '../model/product.type';

import { Text } from '@/src/shared/ui/primitives/text';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  product: IProduct;
};

export const Product = ({ product }: Props) => {
  const { name, sku, fixCashback, cashbackType } = product;

  return (
    <Flex center>
      <Flex col gap={1}>
        <Text size={18} weight={600}>
          {name}
        </Text>
        <Text opacity={0.5} size={15}>
          {sku}
        </Text>
      </Flex>
      <Tooltip title='Такое количество бонусов вы получите от стоимости препарата в'>
        <Flex center className='bg-default px-2 h-8 rounded-full' gap={1} width={'min-width'}>
          {cashbackType === 'amount' ? (
            <>
              <DiamondsFour className='text-[--accent]' weight='fill' />
              <Text className='text-[--accent]' size={18} weight={600}>
                {fixCashback}
              </Text>
            </>
          ) : (
            <Text className='text-[--accent] w-fit text-nowrap' size={18} weight={600}>
              {fixCashback}%
            </Text>
          )}
        </Flex>
      </Tooltip>
    </Flex>
  );
};
