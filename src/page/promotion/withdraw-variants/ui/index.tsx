'use client';
import { RadioGroup } from '@nextui-org/radio';
import { useState } from 'react';

import { CardsList, PhonesList, WithdrawList } from '../config/withdraw-list';
import { findSelectedValue } from '../lib/utils/find-selection-value';

import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { TWithdrawType, WithdrawVariants } from '@/src/widgets/customer/withdraw-variants';

export const WithdrawVariantsPage = () => {
  const [selectedValue, setSelectedValue] = useState(
    [...CardsList, ...PhonesList].reduce(findSelectedValue, ''),
  );

  return (
    <SectionWithTitleLayout isBack title='Способы выплаты'>
      <RadioGroup value={selectedValue}>
        {WithdrawList.map((item) => (
          <WithdrawVariants
            key={item.type}
            action={<></>}
            list={item.list}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            type={item.type as TWithdrawType}
          />
        ))}
      </RadioGroup>
    </SectionWithTitleLayout>
  );
};
