import { IProduct } from '../model/product.type';
import { CashbackChip } from '../../cashback';

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

      <CashbackChip color='onBg' type={cashbackType}>
        {fixCashback}
      </CashbackChip>
    </Flex>
  );
};
