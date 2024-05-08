import { ReactNode } from 'react';
import { Appearance } from 'react-native';
import { AppActions } from '@shared/domain/app-actions.enum';
import { userEntityResponseStub } from '@modules/auth/infra/proxy/__stubs__/user-entity-response.stub';
import { AppReducer, appInitialState } from '../reducer';
import { ErrorPageInterface } from '@shared/config/error/error-page-types';
import { AppState } from '@shared/domain/app-store';

const errorPage: ErrorPageInterface = {
  title: '',
  subtitle: 'Subtitle',
  Icon: {} as ReactNode,
  primaryText: 'Continuar',
  primaryAction: () => null,
  secondaryText: 'Cancelar',
  secondaryAction: () => null,
};
describe('App Reducer', () => {
  it('should set userIdentity', () => {
    const state = { ...appInitialState };
    const finalState = AppReducer(state, { type: AppActions.SetUserEntity, payload: userEntityResponseStub });
    expect(finalState.user).toEqual(userEntityResponseStub);
  });

  it('should turn isFetching to true', () => {
    const state = { ...appInitialState, isFetching: true };
    const finalState = AppReducer(state, { type: AppActions.IsFetching });
    expect(finalState).toEqual({ ...appInitialState, isFetching: true, pendingFetches: 1 });
  });

  it('should turn isFetching to false', () => {
    const state = { ...appInitialState, isFetching: true, pendingFetches: 1 };
    const finalState = AppReducer(state, { type: AppActions.FinishedFetching });
    expect(finalState).toEqual({ ...appInitialState, isFetching: false, pendingFetches: 0 });
  });
  it('should save theme ligth', () => {
    jest.spyOn(Appearance, 'getColorScheme').mockReturnValueOnce('light');
    const state: AppState = { ...appInitialState };
    const finalState = AppReducer(state, { type: AppActions.SaveThemeMode, payload: 'dark' });
    expect(finalState.theme).toEqual('dark');
  });

  it('should handle error fetching', () => {
    const state = { ...appInitialState };
    const error = errorPage;
    const finalState = AppReducer(state, { type: AppActions.ErrorFetching, payload: error });
    expect(finalState.error).toEqual(error);
    expect(finalState.isFetching).toEqual(false);
  });

  it('should throw error', () => {
    const errorMock = new Error('Unhandled action type: Khal Drogo');
    const state: AppState = appInitialState;
    expect(() => {
      AppReducer(state, {
        type: 'Khal Drogo' as AppActions,
      });
    }).toThrow(errorMock);
  });
});
