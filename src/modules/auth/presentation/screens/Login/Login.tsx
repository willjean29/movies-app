import { useState } from 'react';
import { IconAssets } from '@shared/config/constants/icons';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormFields } from '@modules/auth/domain/login-form';
import { LoginFieldName } from '@modules/auth/domain/login-form-fields';
import { Container, FlexContainer, SpacingContainer } from '@shared/presentation/components/Container';
import { Text } from '@shared/presentation/components/Text';
import { SocialButton, Button } from '@shared/presentation/components/Button';
import { Divider } from '@shared/presentation/components/Divider';
import { TextInput } from '@shared/presentation/components/TextInput';
import { Image } from '@shared/presentation/components/Image';
import { DeviceDimensions } from '@shared/config/constants/device';
import { AuthRoutesName } from '@modules/auth/domain/routes-names';
import { loginFormYupSchema } from './login.schema';
import { useGlobalAppDispatch } from '@shared/presentation/store/app-context';
import { AuthActions } from '@modules/auth/presentation/store/actions';

const Login = () => {
  const dispatchApp = useGlobalAppDispatch();
  const navigation = useNavigation();
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const defaultValues: LoginFormFields = {
    email: '',
    password: '',
  };
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LoginFormFields>({
    mode: 'all',
    resolver: yupResolver(loginFormYupSchema),
    defaultValues: defaultValues,
  });
  console.log({ DeviceDimensions });
  const navigateToRegister = () => {
    reset();
    navigation.navigate(AuthRoutesName.Register);
  };

  const handleLogin = async (data: LoginFormFields) => {
    console.log({ data });
    try {
      const userInfo = await AuthActions.validateUser(dispatchApp, data);
      console.log({ userInfo });
    } catch (error) {
      console.log({ error });
    }
    // todo : implement login service
  };
  return (
    <Container isViewKeyboardAware>
      <SpacingContainer paddingHorizontal={20}>
        <FlexContainer>
          <FlexContainer alignItems="center">
            <SpacingContainer marginVertical={20}>
              <Image source={IconAssets.Logo} />
            </SpacingContainer>
            <Text size="TitleSmall" align="center" weight="bold">
              Welcome Back
            </Text>
            <SpacingContainer marginVertical={10} marginHorizontal={20}>
              <Text size="BodyMedium" align="center" mode="secondary">
                Login into your account using email or social networks
              </Text>
            </SpacingContainer>
          </FlexContainer>

          <SocialButton social="apple" text=" Login with Apple" />
          <SocialButton social="google" text="Login with Google" />

          <SpacingContainer marginVertical={20}>
            <FlexContainer mode="row" justifyContent="center" alignItems="center" gap={10}>
              <Divider flexible />

              <Text size="BodyMedium" mode="secondary">
                Or continue with social account
              </Text>
              <Divider flexible />
            </FlexContainer>
          </SpacingContainer>
          <Controller
            control={control}
            name={LoginFieldName.Email}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Email"
                textContentType="emailAddress"
                value={value}
                onChangeText={onChange}
                error={errors[LoginFieldName.Email]?.message}
              />
            )}
          />
          <Controller
            control={control}
            name={LoginFieldName.Password}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Password"
                textContentType="password"
                secureTextEntry={hiddenPassword}
                value={value}
                onChangeText={onChange}
                error={errors[LoginFieldName.Password]?.message}
                iconRight={hiddenPassword ? 'eye-off' : 'eye'}
                onPressIconRight={() => setHiddenPassword(!hiddenPassword)}
              />
            )}
          />
          <SpacingContainer marginVertical={0}>
            <Text size="BodyMedium" mode="link" align="right">
              Forgot your password?
            </Text>
          </SpacingContainer>
          <SpacingContainer marginVertical={10}>
            <Button mode="contained" onPress={handleSubmit(handleLogin)}>
              Login
            </Button>
          </SpacingContainer>
        </FlexContainer>

        <FlexContainer justifyContent="center">
          <SpacingContainer marginVertical={20}>
            <FlexContainer mode="row" justifyContent="center" alignItems="center" gap={5}>
              <Text size="BodyMedium" align="center">
                Didn´t have an account?
              </Text>
              <Text size="BodyMedium" mode="link" onPress={navigateToRegister}>
                Register
              </Text>
            </FlexContainer>
          </SpacingContainer>
        </FlexContainer>
      </SpacingContainer>
    </Container>
  );
};

export default Login;
