import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from './shared/presentation/theme/ThemeProvider';
import Button from './shared/presentation/components/Button/Button';
const Stack = createStackNavigator();
const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>HOME PAGE src</Text>
        <Button>Login</Button>
      </SafeAreaView>
    </View>
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
