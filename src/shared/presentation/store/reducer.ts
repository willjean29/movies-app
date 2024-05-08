import { AppActions } from '@shared/domain/app-actions.enum';
import { AppReducerFn, AppState, DispatchObject } from '@shared/domain/app-store';
import { Draft, produce } from 'immer';
import { Appearance } from 'react-native';
import { throwUnhandleActionError } from '@shared/config/helpers/expections';
import { ErrorPageInterface } from '@shared/config/error/error-page-types';

export const appInitialState: AppState = {
  user: null,
  theme: Appearance.getColorScheme() || 'light',
  pendingFetches: 0,
  isFetching: false,
  error: null,
};

const handleSetUserEntity: AppReducerFn = ({ draft, payload }) => {
  draft.user = payload;
};

const handleSaveThemeMode: AppReducerFn = ({ draft, payload }) => {
  draft.theme = payload;
};

const handleIsFetching: AppReducerFn = ({ draft }) => {
  draft.pendingFetches += 1;
  draft.isFetching = true;
  draft.error = null;
};

const handleFinishedFetching: AppReducerFn = ({ draft }) => {
  draft.pendingFetches -= 1;
  draft.isFetching = false;
};

const handleErrorFetching: AppReducerFn = ({ draft, payload }) => {
  draft.isFetching = false;
  draft.error = payload as ErrorPageInterface;
};

const appReducerHandlers: Record<AppActions, AppReducerFn> = {
  [AppActions.SaveThemeMode]: handleSaveThemeMode,
  [AppActions.IsFetching]: handleIsFetching,
  [AppActions.FinishedFetching]: handleFinishedFetching,
  [AppActions.ErrorFetching]: handleErrorFetching,
  [AppActions.SetUserEntity]: handleSetUserEntity,
};

export const AppReducer = produce((draft: Draft<AppState>, { type, payload }: DispatchObject<AppActions>) => {
  const handler = appReducerHandlers[type] ?? throwUnhandleActionError(type);
  return handler({ draft, type, payload });
});
