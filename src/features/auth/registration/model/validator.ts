import * as Yup from 'yup';

import { ValidatorSchemas } from '@/src/shared/model/validator-schemas';

export const ValidateRegistrationSchema = Yup.object().shape({
  password: ValidatorSchemas.password,
  address: ValidatorSchemas.address,
  phone: ValidatorSchemas.phone,
  surname: ValidatorSchemas.surname,
  name: ValidatorSchemas.name,
});
