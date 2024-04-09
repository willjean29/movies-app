import React, {createContext, useContext, useEffect, useState} from 'react';
import {Appearance, StatusBar} from 'react-native';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {Theme, ThemeProviderProps, ThemeState} from '../../domain/theme-state';
import darkTheme from './dark';
import lightTheme from './light';

export type TypeTheme = typeof lightTheme;

const ThemeStateContext = createContext<ThemeState | undefined>(undefined);

const defaultMode = Appearance.getColorScheme() || 'light';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [themeState, setThemeState] = useState(defaultMode);
  const setMode = (mode: Theme) => {
    setThemeState(mode);
  };
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setThemeState(colorScheme as Theme);
    });
    return () => subscription.remove();
  }, []);
  return (
    <ThemeStateContext.Provider value={{mode: themeState, setMode}}>
      <StyledThemeProvider
        theme={themeState === 'light' ? lightTheme : darkTheme}>
        <>
          <StatusBar
            barStyle={themeState === 'light' ? 'dark-content' : 'light-content'}
          />
          {children}
        </>
      </StyledThemeProvider>
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
