import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = { promotionId: string };

export const PromotionTermsPage = ({ promotionId }: Props) => {
  return <SectionWithTitleLayout isBack title='Положения и условия' />;
};
