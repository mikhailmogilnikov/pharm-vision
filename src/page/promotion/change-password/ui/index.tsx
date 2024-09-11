import { Spacer } from '@nextui-org/spacer';

import { ChangePasswordForm } from '@/src/features/auth/change-password';
import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';

type Props = { promotionId: string };

export const PromotionChangePasswordPage = ({ promotionId }: Props) => {
  return (
    <SectionWithTitleLayout isBack title='Изменить пароль'>
      <Spacer />
      <ChangePasswordForm />
    </SectionWithTitleLayout>
  );
};
