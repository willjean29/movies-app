import React from 'react';
import {
  Button,
  Container,
  Divider,
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
      <View style={{flex: 0.8}}>
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
            marginVertical: 10,
          }}>
          <Divider flexible />

          <Text size="BodyMedium" style={{textAlign: 'center'}}>
            Or continue with social account
          </Text>
          <Divider flexible />
        </View>
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
          flex: 0.2,
          justifyContent: 'center',
        }}>
        <Button style={{height: 50}} mode="contained">
          Login
        </Button>
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
