import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from './shared/presentation/theme/ThemeProvider';
import Button from './shared/presentation/components/Button/Button';
import {Container} from './shared/presentation/components';
const Stack = createStackNavigator();
const Home = () => {
  return (
    <Container>
      <SafeAreaView>
        <Text>HOME PAGE src</Text>
        <Button>Login</Button>
      </SafeAreaView>
    </Container>
  );
};

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
