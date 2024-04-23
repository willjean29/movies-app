import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '@modules/auth/presentation/pages/Login/Login';
import Register from '@modules/auth/presentation/pages/Register/Register';
import Enrollment from '@modules/auth/presentation/pages/Enrollment/Enrollment';
import {AuthRoutesName} from '@modules/auth/domain/routes-names';
import {AuthStackParamList} from '@modules/auth/domain/navigation';
import {Text} from '@shared/presentation/components/Text';
const LoadingScreen = () => {
  return <Text>Loading ....</Text>;
};
const Stack = createStackNavigator<AuthStackParamList>();
const AuthNavigation = () => {
  const [initialRoute, setInitialRoute] = useState<AuthRoutesName | null>(null);

  useEffect(() => {
    const isEnrollment = async () => {
      const value = await AsyncStorage.getItem('isEnrollment');
      setInitialRoute(
        value !== null ? AuthRoutesName.Login : AuthRoutesName.Enrollment,
      );
    };

    isEnrollment();
  }, []);

  if (initialRoute === null) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
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
