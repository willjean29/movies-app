import React from 'react';
import {
  Button,
  Container,
  Divider,
  TextInput,
  Text,
  FlexContainer,
} from '../../../../../shared/presentation/components';
import {Image, View} from 'react-native';

const Login = () => {
  return (
    <Container style={{marginHorizontal: 20}}>
      {/* container logo and form */}
      <FlexContainer flex={0.7}>
        {/* container logo and buttons */}
        <FlexContainer alignItems="center">
          <View style={{marginVertical: 20, gap: 10}}>
            <Image
              source={require('../../../../../shared/presentation/assets/logo.png')}
            />
          </View>
          <Text size="TitleSmall" align="center">
            Welcome Back
          </Text>
          <View
            style={{
              // width: '70%',
              marginVertical: 10,
            }}>
            <Text size="BodyMedium" align="center" mode="secondary">
              Login into your account using email or social networks
            </Text>
          </View>
        </FlexContainer>

        <Button mode="outlined">Login with Apple</Button>
        <Button mode="outlined">Login with Google</Button>

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            marginVertical: 20,
          }}>
          <Divider flexible />

          <Text size="BodyMedium" mode="secondary">
            Or continue with social account
          </Text>
          <Divider flexible />
        </View> */}
        <FlexContainer
          mode="row"
          justifyContent="center"
          alignItems="center"
          gap={10}>
          <Divider flexible />

          <Text size="BodyMedium" mode="secondary">
            Or continue with social account
          </Text>
          <Divider flexible />
        </FlexContainer>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" icon="eye-off-outline" />

        <Text size="BodyMedium" mode="link" align="right">
          Forgot your password?
        </Text>
      </FlexContainer>

      {/* container buttons */}
      <FlexContainer flex={0.3} justifyContent="center" alignItems="center">
        <Button mode="contained">Login</Button>
        <Text size="BodyMedium" align="center">
          Didn´t have an account?{' '}
          <Text size="BodyMedium" mode="link" align="right">
            Register
          </Text>
        </Text>
      </FlexContainer>
    </Container>
  );
};

export default Login;
