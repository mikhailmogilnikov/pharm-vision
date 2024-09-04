import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { ReceiptsList } from '@/src/widgets/receipts-list';

export const MyReceiptsPage = () => {
  return (
    <SectionWithTitleLayout isBack title='Мои чеки'>
      <ReceiptsList />
    </SectionWithTitleLayout>
  );
};
