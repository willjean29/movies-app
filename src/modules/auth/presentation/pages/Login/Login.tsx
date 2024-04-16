import {IconAssets} from '@shared/presentation/utils/icons';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginFormFields} from '@modules/auth/domain/login-form';
import {LoginFieldName} from '@modules/auth/domain/login-form-fields';
import {
  Container,
  FlexContainer,
  SpacingContainer,
} from '@shared/presentation/components/Container';
import {Text} from '@shared/presentation/components/Text';
import {SocialButton, Button} from '@shared/presentation/components/Button';
import {Divider} from '@shared/presentation/components/Divider';
import {TextInput} from '@shared/presentation/components/TextInput';
import {Image} from '@shared/presentation/components/Image';
import {DeviceDimensions} from '@shared/presentation/utils/device';
import {AuthRoutesName} from '@modules/auth/domain/routes-names';
import {loginFormYupSchema} from './login.schema';

const Login = () => {
  const navigation = useNavigation();
  const defaultValues: LoginFormFields = {
    email: '',
    password: '',
  };
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    reset,
  } = useForm<LoginFormFields>({
    mode: 'all',
    resolver: yupResolver(loginFormYupSchema),
    defaultValues: defaultValues,
  });

  const navigateToRegister = () => {
    reset();
    navigation.navigate(AuthRoutesName.Register);
  };

  const handleLogin = (data: LoginFormFields) => {
    console.log({data});
    // todo : implement login service
  };
  return (
    <Container isViewKeyboardAware>
      <SpacingContainer flex={1} paddingHorizontal={20}>
        <FlexContainer height={DeviceDimensions.Height * 0.8}>
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
          <Controller
            control={control}
            name={LoginFieldName.Email}
            render={({field: {onChange, value}}) => (
              <TextInput
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                error={errors[LoginFieldName.Email]?.message}
              />
            )}
          />
          <Controller
            control={control}
            name={LoginFieldName.Password}
            render={({field: {onChange, value}}) => (
              <TextInput
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                error={errors[LoginFieldName.Password]?.message}
                iconRight="eye-off"
              />
            )}
          />
          <SpacingContainer
            marginVertical={Object.entries(errors).length ? 10 : 0}>
            <Text size="BodyMedium" mode="link" align="right">
              Forgot your password?
            </Text>
          </SpacingContainer>
          <SpacingContainer marginVertical={20}>
            <Button mode="contained" onPress={handleSubmit(handleLogin)}>
              Login
            </Button>
          </SpacingContainer>
        </FlexContainer>

        <FlexContainer height={DeviceDimensions.Height * 0.2}>
          <SpacingContainer marginVertical={20}>
            <Text size="BodyMedium" align="center">
              Didn´t have an account?{' '}
              <Text size="BodyMedium" mode="link" onPress={navigateToRegister}>
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
