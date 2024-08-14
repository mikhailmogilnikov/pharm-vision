import { TCard, TPhone } from '../model/withdraw.type';

import { WithdrawItem } from './withdraw-item';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Article } from '@/src/shared/ui/primitives/article';

type Props = TCard | TPhone;

export const ActiveVariant = (props: Props) => {
  return (
    <Article title='Основной способ' titleClassname='mt-4'>
      <Flex className='px-4'>
        <WithdrawItem {...props} isActive />
      </Flex>
    </Article>
  );
};
