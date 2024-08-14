import { TCard, TPhone, TWithdrawType } from '../model/withdraw.type';

import { WithdrawContainer } from './withdraw-container';
import { ActiveVariant } from './active-variant';

import { WithdrawList } from '@/src/page/promotion/withdraw-variants/config/withdraw-list';

type Props = {
  variantsList: (TCard | TPhone)[];
};

export const WithdrawVariants = ({ variantsList }: Props) => {
  const activeVariant = variantsList.find((item) => item.isActive);

  return (
    <>
      {activeVariant && <ActiveVariant {...activeVariant} />}
      {WithdrawList.map((item) => (
        <WithdrawContainer key={item.type} list={item.list} type={item.type as TWithdrawType} />
      ))}
    </>
  );
};
