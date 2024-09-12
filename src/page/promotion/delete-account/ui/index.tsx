import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { DeleteAccountForm } from '@/src/features/auth/delete-account';

type Props = { promotionId: string };

export const DeleteAccountPage = ({ promotionId }: Props) => {
  return (
    <SectionWithTitleLayout isBack title='Удалить аккаунт'>
      <DeleteAccountForm />
    </SectionWithTitleLayout>
  );
};
