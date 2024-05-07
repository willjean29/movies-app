import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigation from '@modules/auth/presentation/navigation/AuthNavigation';
import { GlobalAppProvider, useGlobalAppState } from '@shared/presentation/store/app-context';
import { darkTheme, lightTheme } from '@shared/config/theme';

const AppNavigation = () => {
  const { theme } = useGlobalAppState();
  return (
    <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
      <AuthNavigation />
    </NavigationContainer>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <GlobalAppProvider>
        <AppNavigation />
      </GlobalAppProvider>
    </SafeAreaProvider>
  );
}

export default App;
