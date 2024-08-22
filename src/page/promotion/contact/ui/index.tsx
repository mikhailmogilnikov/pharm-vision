import { ContactWithUsForm } from '@/src/features/contact-us';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = { promotionId: string };

export const PromotionContactPage = ({ promotionId }: Props) => {
  return (
    <SectionWithTitleLayout isBack title='Связаться с нами'>
      <ContactWithUsForm />
    </SectionWithTitleLayout>
  );
};
