import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = { promotionId: string };

export const PromotionSupportPage = ({ promotionId }: Props) => {
  return <SectionWithTitleLayout isBack title='Центр помощи' />;
};
