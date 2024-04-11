import React from 'react';
import {
  Button,
  Container,
  Divider,
  TextInput,
  Text,
  FlexContainer,
  SpacingContainer,
  SocialButton,
} from '../../../../../shared/presentation/components';
import {Image} from 'react-native';
import {IconAssets} from '../../../../../shared/presentation/utils/icons';

const Login = () => {
  return (
    <Container isViewKeyboardAware>
      <SpacingContainer flex={1} paddingHorizontal={20}>
        <FlexContainer flex={0.7}>
          <FlexContainer alignItems="center">
            <SpacingContainer marginVertical={20}>
              <Image source={IconAssets.Logo} />
            </SpacingContainer>
            <Text size="TitleSmall" align="center" weight="bold">
              Welcome Back
            </Text>
            <SpacingContainer marginVertical={20} marginHorizontal={60}>
              <Text size="BodyMedium" align="center" mode="secondary">
                Login into your account using email or social networks
              </Text>
            </SpacingContainer>
          </FlexContainer>

          <SocialButton social="apple" text=" Login with Apple" />
          <SocialButton social="google" text="Login with Google" />

          <SpacingContainer marginVertical={20}>
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
          </SpacingContainer>

          <TextInput placeholder="Email" />
          <TextInput placeholder="Password" iconRight="eye-off-outline" />

          <Text size="BodyMedium" mode="link" align="right">
            Forgot your password?
          </Text>
        </FlexContainer>

        <FlexContainer flex={0.3} justifyContent="center" alignItems="center">
          <Button mode="contained">Login</Button>
          <SpacingContainer marginVertical={20}>
            <Text size="BodyMedium" align="center">
              Didn´t have an account?{' '}
              <Text size="BodyMedium" mode="link">
                Register
              </Text>
            </Text>
          </SpacingContainer>
        </FlexContainer>
      </SpacingContainer>
    </Container>
  );
};

export default Login;
