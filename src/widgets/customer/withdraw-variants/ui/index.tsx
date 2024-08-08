import { Squircle } from '@squircle-js/react';

import { TCard, TPhone, TWithdrawType } from '../model/withdraw.type';
import { WithdrawTitles } from '../config/withdrow-titles';
import { VariantsIcons } from '../config/variants-icons';
import { TIcons } from '../model/variants-icons.type';

import { WithdrawItem } from './withdraw-item';

import { Text } from '@/src/shared/ui/primitives/text';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';

type Props = {
  list: TCard[] | TPhone[];
  type: TWithdrawType;
  action: React.ReactNode;
  setSelectedValue: (value: string) => void;
  selectedValue: string;
};

export const WithdrawVariants = ({
  list,
  type,
  action,
  setSelectedValue,
  selectedValue,
}: Props) => {
  return (
    <Squircle className='bg-default flex flex-col h-min p-5' cornerRadius={18} cornerSmoothing={1}>
      <Text className='mb-3' size={22} tag={'h2'}>
        {WithdrawTitles[type]}
      </Text>
      <ul>
        {list.map((item, index) => (
          <MotionLayout
            key={item.id}
            animate={{ opacity: 1, y: 0 }}
            className='w-full'
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: (index + 1) / 20 }}
          >
            <WithdrawItem
              icon={VariantsIcons[type][item.type as keyof TIcons]}
              id={item.id}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              title={item.title}
            />
          </MotionLayout>
        ))}
      </ul>
      {action}
    </Squircle>
  );
};
