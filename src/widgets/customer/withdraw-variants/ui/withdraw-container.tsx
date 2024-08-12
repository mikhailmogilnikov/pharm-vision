import { TCard, TPhone, TWithdrawType } from '../model/withdraw.type';
import { WithdrawTitles } from '../config/withdrow-titles';
import { VariantsIcons } from '../config/variants-icons';
import { TIcons } from '../model/variants-icons.type';

import { WithdrawItem } from './withdraw-item';

import { Article } from '@/src/shared/ui/primitives/article';

type Props = {
  list: TCard[] | TPhone[];
  type: TWithdrawType;
  action: React.ReactNode;
  setSelectedValue: (value: string) => void;
  selectedValue: string;
};

export const WithdrawContainer = ({
  list,
  type,
  action,
  setSelectedValue,
  selectedValue,
}: Props) => {
  return (
    <Article title={WithdrawTitles[type]} titleClassname='mt-4'>
      <ul className='flex flex-col gap-2'>
        {list.map((item) => (
          <WithdrawItem
            key={item.id}
            icon={VariantsIcons[type][item.type as keyof TIcons]}
            id={item.id}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            title={item.title}
          />
        ))}
      </ul>
    </Article>
  );
};
