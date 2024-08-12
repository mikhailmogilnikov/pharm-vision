'use client';

import { useState } from 'react';
import { RadioGroup } from '@nextui-org/radio';

import { TCard, TPhone, TWithdrawType } from '../model/withdraw.type';
import { findSelectedValue } from '../lib/utils/find-selection-value';

import { WithdrawContainer } from './withdraw-container';

import { WithdrawList } from '@/src/page/promotion/withdraw-variants/config/withdraw-list';

type Props = {
  variantsList: (TCard | TPhone)[];
};

export const WithdrawVariants = ({ variantsList }: Props) => {
  const [selectedValue, setSelectedValue] = useState(variantsList.reduce(findSelectedValue, ''));

  return (
    <RadioGroup value={selectedValue}>
      {WithdrawList.map((item) => (
        <WithdrawContainer
          key={item.type}
          action={<></>}
          list={item.list}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          type={item.type as TWithdrawType}
        />
      ))}
    </RadioGroup>
  );
};
