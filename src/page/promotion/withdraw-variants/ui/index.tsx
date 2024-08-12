import { CardsList, PhonesList } from '../config/withdraw-list';

import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { WithdrawVariants } from '@/src/widgets/customer/withdraw-variants';

export const WithdrawVariantsPage = () => {
  return (
    <SectionWithTitleLayout isBack title='Способы выплат'>
      <WithdrawVariants variantsList={[...CardsList, ...PhonesList]} />
    </SectionWithTitleLayout>
  );
};
