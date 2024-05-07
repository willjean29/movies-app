import { LoginFieldName } from './login-form-fields';

export interface LoginFormFields {
  [LoginFieldName.Email]: string;
  [LoginFieldName.Password]: string;
}
