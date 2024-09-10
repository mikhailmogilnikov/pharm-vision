import { UserSettingsActions } from './actions';
import { UserSetting } from './setting';

import { EUserSettings } from '@/src/features/change-user-info';
import { ICustomer } from '@/src/entities/customer';
import { Flex } from '@/src/shared/ui/primitives/flex';

type Props = {
  customer: ICustomer;
};

export const UserSettingsBlock = ({ customer }: Props) => {
  return (
    <Flex col className='mt-4' gap={8}>
      {Object.values(EUserSettings).map((id) => (
        <UserSetting key={id} id={id} value={customer[id]} />
      ))}
      <UserSettingsActions />
    </Flex>
  );
};
