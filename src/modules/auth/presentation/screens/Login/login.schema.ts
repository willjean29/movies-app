import {object as yupObject, string as yupString} from 'yup';
import {LoginFieldName} from '@modules/auth/domain/login-form-fields';
import {Regex} from '@shared/presentation/utils/regex';
import {ErrorMessage} from '@shared/presentation/utils/errro-messages';

export const loginFormYupSchema = yupObject().shape({
  [LoginFieldName.Email]: yupString()
    .required(ErrorMessage.Required)
    .matches(Regex.email, {
      message: ErrorMessage.InvalidEmail,
      excludeEmptyString: true,
    }),
  [LoginFieldName.Password]: yupString()
    .required(ErrorMessage.Required)
    .matches(Regex.password, {
      message: ErrorMessage.InvalidPassword,
      excludeEmptyString: true,
    }),
});
