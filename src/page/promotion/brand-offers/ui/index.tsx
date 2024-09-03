import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = {
  promotionId: string;
  brandId: string;
};

export const PromotionBrandOffersPage = ({ promotionId, brandId }: Props) => {
  return (
    <SectionWithTitleLayout
      isBack
      fallbackUrl={`/promotion/${promotionId}/brand/${brandId}`}
      title='Спецпредложения'
    >
      а
    </SectionWithTitleLayout>
  );
};
