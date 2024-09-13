import * as Yup from 'yup';

import { TRegistrationData } from '../config/initial-data';
import { ValidateRegistrationSchema } from '../model/validator';

export const validateRegistration = async (userData: TRegistrationData) => {
  try {
    await ValidateRegistrationSchema.validate(userData);

    if (userData.passwordConfirm !== userData.password) return 'Подтвердите пароль';

    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return error.errors[0];
    } else {
      throw error;
    }
  }
};
