import React from 'react';
import {
  Button,
  Container,
  Divider,
  TextInput,
  Text,
} from '../../../../../shared/presentation/components';
import {Image, View} from 'react-native';

const Login = () => {
  return (
    <Container
      style={{
        paddingHorizontal: 20,
      }}>
      {/* container logo and form */}
      <View style={{flex: 0.7}}>
        {/* container logo and buttons */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginVertical: 20,
            }}>
            <Image
              source={require('../../../../../shared/presentation/assets/logo.png')}
            />
          </View>
          <Text
            size="TitleSmall"
            style={{
              textAlign: 'center',
              marginVertical: 10,
              fontWeight: 'bold',
            }}>
            Welcome Back
          </Text>
          <View
            style={{
              width: '70%',
              marginVertical: 10,
            }}>
            <Text
              size="BodyMedium"
              style={{
                textAlign: 'center',
                color: 'gray',
              }}>
              Login into your account using email or social networks
            </Text>
          </View>
        </View>

        <Button mode="outlined">Login with Apple</Button>
        <Button mode="outlined">Login with Google</Button>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            marginVertical: 20,
          }}>
          <Divider flexible />

          <Text size="BodyMedium" style={{textAlign: 'center', color: 'gray'}}>
            Or continue with social account
          </Text>
          <Divider flexible />
        </View>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" icon="eye-off-outline" />

        <Text
          size="BodyMedium"
          style={{
            textAlign: 'right',
            color: '#FF515A',
          }}>
          Forgot your password?
        </Text>
      </View>

      {/* container buttons */}
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
        }}>
        <Button mode="contained">Login</Button>
        <Text
          size="BodyMedium"
          style={{
            textAlign: 'center',
            marginVertical: 20,
          }}>
          Didn´t have an account?{' '}
          <Text
            size="BodyMedium"
            style={{
              textAlign: 'right',
              color: '#FF515A',
            }}>
            Register
          </Text>
        </Text>
      </View>
    </Container>
  );
};

export default Login;
