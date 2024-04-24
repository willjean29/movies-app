import {RegisterFieldName} from '@modules/auth/domain/register-form-fields';
import {ErrorMessage} from '@shared/presentation/utils/errro-messages';
import {Regex} from '@shared/presentation/utils/regex';
import {object as yupObject, string as yupString, ref} from 'yup';

export const registerYuupSchema = yupObject().shape({
  [RegisterFieldName.Username]: yupString().required(ErrorMessage.Required),
  [RegisterFieldName.Email]: yupString()
    .required(ErrorMessage.Required)
    .matches(Regex.email, {
      message: ErrorMessage.InvalidEmail,
      excludeEmptyString: true,
    }),
  [RegisterFieldName.Password]: yupString()
    .required(ErrorMessage.Required)
    .matches(Regex.password, {
      message: ErrorMessage.InvalidPassword,
      excludeEmptyString: true,
    }),
  [RegisterFieldName.ConfirmPassword]: yupString()
    .required(ErrorMessage.Required)
    .matches(Regex.password, {
      message: ErrorMessage.InvalidPassword,
      excludeEmptyString: true,
    })
    .oneOf([ref(RegisterFieldName.Password)], ErrorMessage.PasswordsMustMatch),
});
