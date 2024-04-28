import {UserEntity} from '@modules/auth/domain/entities/user.entity';
import {LoginFormFields} from '@modules/auth/domain/login-form';
import {AuthProxy} from '@modules/auth/infra/proxy/auth';
import {AppActions} from '@shared/domain/app-actions.enum';
import {AppDispatch} from '@shared/domain/app-store';

const validateUser = async (
  dispatchApp: AppDispatch,
  request: LoginFormFields,
): Promise<UserEntity> => {
  dispatchApp({type: AppActions.IsFetching});
  try {
    const userInfo = await AuthProxy.validateUser(request);
    dispatchApp({type: AppActions.SetUserEntity, payload: userInfo});
    return userInfo;
  } finally {
    dispatchApp({type: AppActions.FinishedFetching});
  }
};

export const AuthActions = {
  validateUser,
};
