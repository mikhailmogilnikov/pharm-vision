import { ContactWithUsForm } from '@/src/features/contact-us';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = { promotionId: string; receiptId?: string };

export const PromotionContactPage = ({ promotionId, receiptId }: Props) => {
  return (
    <SectionWithTitleLayout isBack title='Связаться с нами'>
      <ContactWithUsForm receiptId={receiptId} />
    </SectionWithTitleLayout>
  );
};
