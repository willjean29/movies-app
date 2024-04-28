import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {Appearance, StatusBar} from 'react-native';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {appInitialState, AppReducer} from './reducer';
import {
  AppDispatch,
  AppState,
  GlobalAppProviderProps,
} from '@shared/domain/app-store';
import {AppActions} from '@shared/domain/app-actions.enum';
import {darkTheme, lightTheme, Theme} from '@shared/config/theme';

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<AppDispatch | undefined>(undefined);

export const GlobalAppProvider: React.FC<GlobalAppProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, appInitialState);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      dispatch({
        type: AppActions.SaveThemeMode,
        payload: colorScheme as Theme,
      });
    });
    return () => subscription.remove();
  }, []);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <StyledThemeProvider
          theme={state.theme === 'light' ? lightTheme : darkTheme}>
          <>
            <StatusBar
              barStyle={
                state.theme === 'light' ? 'dark-content' : 'light-content'
              }
            />
            {children}
          </>
        </StyledThemeProvider>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useGlobalAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useGlobalAppState must be used within a ThemeProvider');
  }
  return context;
};

export const useGlobalAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useGlobalAppDispatch must be used within a ThemeProvider');
  }
  return context;
};
