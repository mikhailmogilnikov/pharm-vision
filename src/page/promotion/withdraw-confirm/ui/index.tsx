import { WithdrawSuccessBlock } from '@/src/widgets/customer/withdraw-success';

type Props = { promotionId: string };

export const PromotionWithdrawConfirmPage = ({ promotionId }: Props) => {
  return <WithdrawSuccessBlock />;
};
