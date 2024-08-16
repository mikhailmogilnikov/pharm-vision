import { IWithdrawInfo, WithdrawInfo } from '@/src/features/withdraw/withdraw-info';
import { Article } from '@/src/shared/ui/primitives/article';

type Props = {
  history: IWithdrawInfo[];
};

export const WithdrawHistoryList = ({ history }: Props) => {
  return (
    <Article blockClassname='p-4 gap-6'>
      {history.map((info) => (
        <WithdrawInfo key={info.id} info={info} />
      ))}
    </Article>
  );
};
