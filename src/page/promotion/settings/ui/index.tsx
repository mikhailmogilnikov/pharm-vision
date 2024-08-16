import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = { promotionId: string };

export const PromotionSettingsPage = ({ promotionId }: Props) => {
  return <SectionWithTitleLayout isBack title='Настройки' />;
};
