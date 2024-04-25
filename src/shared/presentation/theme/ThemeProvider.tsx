import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {Appearance, StatusBar} from 'react-native';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {
  Theme,
  ThemeProviderProps,
  ThemeState,
} from '@shared/domain/theme-state';
import {Draft, produce} from 'immer';
import darkTheme from './dark';
import lightTheme from './light';
export const throwUnhandleActionError = (type: string): never => {
  throw new Error(`Unhandled action type: ${type}`);
};
export enum ThemeActions {
  SaveThemeMode = 'SAVE_THEME_MODE',
}
export interface DispatchObject<T, P = any> {
  type: T;
  payload: P;
}
export type TypeTheme = typeof lightTheme;
export type ThemeDispatch = Dispatch<DispatchObject<ThemeActions>>;
export interface ReducerFnProps<T, K> extends DispatchObject<K> {
  draft: Draft<T>;
}
export interface ThemeReducerFn {
  (props: ReducerFnProps<ThemeState, ThemeActions>): void;
}
export const themeInitialState: ThemeState = {
  mode: Appearance.getColorScheme() || 'light',
};
const handleSaveThemeMode: ThemeReducerFn = ({draft, payload}) => {
  draft.mode = payload;
};
const themeReducerHandlers: Record<ThemeActions, ThemeReducerFn> = {
  [ThemeActions.SaveThemeMode]: handleSaveThemeMode,
};
const ThemeReducer = produce(
  (draft: Draft<ThemeState>, {type, payload}: DispatchObject<ThemeActions>) => {
    const handler =
      themeReducerHandlers[type] ?? throwUnhandleActionError(type);
    return handler({draft, type, payload});
  },
);
const ThemeStateContext = createContext<ThemeState | undefined>(undefined);
const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(ThemeReducer, themeInitialState);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      dispatch({
        type: ThemeActions.SaveThemeMode,
        payload: colorScheme as Theme,
      });
    });
    return () => subscription.remove();
  }, []);
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <StyledThemeProvider
          theme={state.mode === 'light' ? lightTheme : darkTheme}>
          <>
            <StatusBar
              barStyle={
                state.mode === 'light' ? 'dark-content' : 'light-content'
              }
            />
            {children}
          </>
        </StyledThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export const useThemeState = () => {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return context;
};

export const useThemeDispatch = () => {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
};
