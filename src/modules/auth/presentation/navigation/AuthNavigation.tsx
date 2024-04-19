import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@modules/auth/presentation/pages/Login/Login';
import Register from '@modules/auth/presentation/pages/Register/Register';
import Enrollment from '@modules/auth/presentation/pages/Enrollment/Enrollment';
import {AuthRoutesName} from '@modules/auth/domain/routes-names';
import {AuthStackParamList} from '@modules/auth/domain/navigation';

const Stack = createStackNavigator<AuthStackParamList>();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthRoutesName.Enrollment}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthRoutesName.Login} component={Login} />
      <Stack.Screen name={AuthRoutesName.Register} component={Register} />
      <Stack.Screen name={AuthRoutesName.Enrollment} component={Enrollment} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
