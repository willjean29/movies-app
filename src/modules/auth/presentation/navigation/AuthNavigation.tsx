import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Enrollment from '../pages/Enrollment/Enrollment';
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Enrollment" component={Enrollment} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
