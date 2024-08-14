import { TCard, TPhone, TWithdrawType } from '../model/withdraw.type';
import { WithdrawTitles } from '../config/withdrow-titles';

import { WithdrawItem } from './withdraw-item';

import { Article } from '@/src/shared/ui/primitives/article';
import { AddWithdrawVariant } from '@/src/features/withdraw/add-withdraw-variant.tsx';

type Props = {
  list: TCard[] | TPhone[];
  type: TWithdrawType;
};

export const WithdrawContainer = ({ list, type }: Props) => {
  return (
    <Article
      actionButton={<AddWithdrawVariant type={type} />}
      className='mt-4'
      title={WithdrawTitles[type]}
    >
      <ul className='flex flex-col gap-2'>
        {list.map((item) => {
          return item.isActive ? null : (
            <li key={item.id} className='w-full list-none flex items-center px-4'>
              <WithdrawItem {...item} />
            </li>
          );
        })}
      </ul>
    </Article>
  );
};
