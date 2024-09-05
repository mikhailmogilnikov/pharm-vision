import { EUserSettings } from '../model/user-settings.enum';

export const UserSettingsTitles: Record<EUserSettings, string> = {
  [EUserSettings.NAME]: 'Имя',
  [EUserSettings.SURNAME]: 'Фамилия',
  [EUserSettings.PATRONYMIC]: 'Отчество',
  [EUserSettings.EMAIL]: 'Почта',
  [EUserSettings.ADDRESS]: 'Адрес',
};
