import { EditSettingButton } from './edit-setting-button';

import { EUserSettings, UserSettingsTitles } from '@/src/features/change-user-info';
import { Article } from '@/src/shared/ui/primitives/article';
import { Text } from '@/src/shared/ui/primitives/text';

type Props = {
  id: EUserSettings;
  value: string;
};

export const UserSetting = ({ id, value }: Props) => {
  return (
    <Article
      actionButton={<EditSettingButton id={id} initValue={value} />}
      blockClassname='-mt-1 p-4'
      title={UserSettingsTitles[id]}
    >
      <Text opacity={value ? 1 : 0.5} size={18} weight={600}>
        {value || 'Не задано'}
      </Text>
    </Article>
  );
};
