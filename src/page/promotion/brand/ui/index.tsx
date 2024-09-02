import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = {
  promotionId: string;
  brandId: string;
};

export const PromotionBrandPage = ({ promotionId, brandId }: Props) => {
  return (
    <SectionWithTitleLayout isBack fallbackUrl={`/promotion/${promotionId}/goods`} title='Назад'>
      {brandId}
    </SectionWithTitleLayout>
  );
};
