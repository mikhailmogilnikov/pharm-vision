import { MockCustomer } from '../config/mock-customer';

import { SectionWithTitleLayout } from '@/src/shared/ui/layouts/section-with-title';
import { UserSettingsBlock } from '@/src/widgets/customer/user-settings';

type Props = { promotionId: string };

export const PromotionSettingsPage = ({ promotionId }: Props) => {
  return (
    <SectionWithTitleLayout isBack title='Настройки профиля'>
      <UserSettingsBlock customer={MockCustomer} />
    </SectionWithTitleLayout>
  );
};
