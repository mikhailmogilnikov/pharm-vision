import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { WithdrawAmountBlock } from '@/src/widgets/customer/withdraw-amount';

type Props = { promotionId: string };

export const PromotionWithdrawAmountPage = ({ promotionId }: Props) => {
  return (
    <SectionWithTitleLayout isBack title='Выберите количество'>
      <WithdrawAmountBlock amount={261} />
    </SectionWithTitleLayout>
  );
};
