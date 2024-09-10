import { EUserSettings } from '../model/user-settings.enum';

export const UserSettingsTitles: Record<EUserSettings, string> = {
  [EUserSettings.NAME]: 'Имя',
  [EUserSettings.SURNAME]: 'Фамилия',
  [EUserSettings.PATRONYMIC]: 'Отчество',
  [EUserSettings.EMAIL]: 'Почта',
  [EUserSettings.ADDRESS]: 'Адрес',
};

export const UserSettingsTitlesParent: Record<EUserSettings, string> = {
  [EUserSettings.NAME]: 'имя',
  [EUserSettings.SURNAME]: 'фамилию',
  [EUserSettings.PATRONYMIC]: 'отчество',
  [EUserSettings.EMAIL]: 'почту',
  [EUserSettings.ADDRESS]: 'адрес',
};
