import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = { promotionId: string };

export const PromotionWihdrawHistoryPage = ({ promotionId }: Props) => {
  return <SectionWithTitleLayout isBack title='История выводов' />;
};
