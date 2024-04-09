import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './shared/presentation/theme/ThemeProvider';
import AuthNavigation from './modules/auth/presentation/navigation/AuthNavigation';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
