import { TCard, TPhone, TWithdrawType } from '../model/withdraw.type';
import { WithdrawTitles } from '../config/withdrow-titles';

import { WithdrawItem } from './withdraw-item';

import { Article } from '@/src/shared/ui/primitives/article';

type Props = {
  list: TCard[] | TPhone[];
  type: TWithdrawType;
  action: React.ReactNode;
};

export const WithdrawContainer = ({ list, type, action }: Props) => {
  return (
    <Article title={WithdrawTitles[type]} titleClassname='mt-4'>
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
