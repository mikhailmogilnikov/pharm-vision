import * as Yup from 'yup';

import { ValidatorSchemas } from '@/src/shared/model/validator-schemas';

export const ValidateRegistrationSchema = Yup.object().shape({
  password: ValidatorSchemas.password,
  address: ValidatorSchemas.address,
  email: ValidatorSchemas.email,
  surname: ValidatorSchemas.surname,
  name: ValidatorSchemas.name,
});
