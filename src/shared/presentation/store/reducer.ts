import {AppActions} from '@shared/domain/app-actions.enum';
import {AppReducerFn, AppState, DispatchObject} from '@shared/domain/app-store';
import {Draft, produce} from 'immer';
import {Appearance} from 'react-native';
import {throwUnhandleActionError} from '@shared/config/helpers/expections';

export const appInitialState: AppState = {
  user: null,
  theme: Appearance.getColorScheme() || 'light',
  pendingFetches: 0,
  isFetching: false,
  error: null,
};

const handleSaveThemeMode: AppReducerFn = ({draft, payload}) => {
  draft.theme = payload;
};
const themeReducerHandlers: Record<AppActions, AppReducerFn> = {
  [AppActions.SaveThemeMode]: handleSaveThemeMode,
};
export const AppReducer = produce(
  (draft: Draft<AppState>, {type, payload}: DispatchObject<AppActions>) => {
    const handler =
      themeReducerHandlers[type] ?? throwUnhandleActionError(type);
    return handler({draft, type, payload});
  },
);
