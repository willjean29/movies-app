import { RegisterFieldName } from './register-form-fields';

export interface RegisterFormFields {
  [RegisterFieldName.Username]: string;
  [RegisterFieldName.Email]: string;
  [RegisterFieldName.Password]: string;
  [RegisterFieldName.ConfirmPassword]: string;
}
