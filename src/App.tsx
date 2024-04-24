import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  ThemeProvider,
  useThemeState,
} from '@shared/presentation/theme/ThemeProvider';
import AuthNavigation from '@modules/auth/presentation/navigation/AuthNavigation';
import darkTheme from '@shared/presentation/theme/dark';
import lightTheme from '@shared/presentation/theme/light';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppNavigation = () => {
  const {mode} = useThemeState();
  return (
    <NavigationContainer theme={mode === 'dark' ? darkTheme : lightTheme}>
      <AuthNavigation />
    </NavigationContainer>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
