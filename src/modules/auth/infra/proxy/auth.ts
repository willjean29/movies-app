import axios from 'axios';
import {LoginFormFields} from '@modules/auth/domain/login-form';
import {validateUserMapper} from '../mappers/auth.mapper';
import {UserEntityResponse} from '../interfaces/auth.response';

const url = 'http://localhost:8000/api/v1';
const validateUser = async (request: LoginFormFields) => {
  const response = await axios.post<UserEntityResponse>(
    `${url}/auth/login`,
    request,
  );
  const result = response.data;
  return validateUserMapper(result);
};

export const AuthProxy = {
  validateUser,
};
