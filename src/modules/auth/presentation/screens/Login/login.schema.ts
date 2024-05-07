import { object as yupObject, string as yupString } from 'yup';
import { LoginFieldName } from '@modules/auth/domain/login-form-fields';
import { Regex } from '@shared/config/constants/regex';
import { ErrorMessage } from '@shared/config/constants/errro-messages';

export const loginFormYupSchema = yupObject().shape({
  [LoginFieldName.Email]: yupString().required(ErrorMessage.Required).matches(Regex.email, {
    message: ErrorMessage.InvalidEmail,
    excludeEmptyString: true,
  }),
  [LoginFieldName.Password]: yupString().required(ErrorMessage.Required),
});
