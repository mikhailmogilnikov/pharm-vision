import * as Yup from 'yup';

export const getErrorsFromValidator = async <Validator extends Yup.AnyObjectSchema, Data>(
  validator: Validator,
  data: Data,
) => {
  try {
    await validator.validate(data);

    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return error.errors[0];
    } else {
      throw error;
    }
  }
};
