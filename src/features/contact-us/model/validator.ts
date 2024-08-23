import * as Yup from 'yup';

import { ValidatorSchemas } from '@/src/shared/model/validator-schemas';

export const ValidateIssueFormSchema = Yup.object().shape({
  email: ValidatorSchemas.email,
  reason: ValidatorSchemas.arrayNotEmpty('Причина обращения'),
  description: ValidatorSchemas.required('Описание').min(
    10,
    'Описание должно быть не менее 10 символов',
  ),
});

export const ValidateCashbackFormSchema = Yup.object({
  description: ValidatorSchemas.required('Описание').min(
    10,
    'Описание должно быть не менее 10 символов',
  ),
  receipt: ValidatorSchemas.arrayNotEmpty('Чек'),
  reason: ValidatorSchemas.arrayNotEmpty('Причина обращения'),
  email: ValidatorSchemas.email,
});
