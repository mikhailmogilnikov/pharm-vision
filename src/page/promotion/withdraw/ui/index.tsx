import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = { promotionId: string };

export const PromotionWithdrawPage = ({ promotionId }: Props) => {
  return <SectionWithTitleLayout isBack title='Вывод средств' />;
};
