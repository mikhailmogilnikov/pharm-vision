import { TGeomark } from '@/src/shared/model/types/index.type';

export type TRegistrationData = typeof RegistrationInitialData;

export const RegistrationInitialData = {
  name: '',
  surname: '',
  patronymic: '',
  email: '',
  address: null as TGeomark | null,
  password: '',
  passwordConfirm: '',
};
