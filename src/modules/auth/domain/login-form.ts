import {LoginFieldName} from './login-form.enum';

export interface LoginFormFields {
  [LoginFieldName.Email]: string;
  [LoginFieldName.Password]: string;
}
