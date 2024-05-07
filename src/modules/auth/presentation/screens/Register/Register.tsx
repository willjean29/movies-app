import React, { useState } from 'react';
import { IconAssets } from '@shared/config/constants/icons';
import { useNavigation } from '@react-navigation/native';
import { Container, FlexContainer, SpacingContainer } from '@shared/presentation/components/Container';
import { Text } from '@shared/presentation/components/Text';
import { Button } from '@shared/presentation/components/Button';
import { TextInput } from '@shared/presentation/components/TextInput';
import { Image } from '@shared/presentation/components/Image';
import { AuthRoutesName } from '@modules/auth/domain/routes-names';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormFields } from '@modules/auth/domain/register-form';
import { RegisterFieldName } from '@modules/auth/domain/register-form-fields';
import { registerYuupSchema } from './register.schema';

const Register = () => {
  const navigation = useNavigation();
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const defaultValues: RegisterFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormFields>({
    mode: 'all',
    resolver: yupResolver(registerYuupSchema),
    defaultValues,
  });

  const handleRegister = (data: RegisterFormFields) => {
    console.log({ data });
    // todo : implement register service
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
              Create a New Account{' '}
            </Text>
            <SpacingContainer marginVertical={10} marginHorizontal={20}>
              <Text size="BodyMedium" align="center" mode="secondary">
                Set up your username and password. {'\n'} You can always change it later.
              </Text>
            </SpacingContainer>
          </FlexContainer>
          <Controller
            control={control}
            name={RegisterFieldName.Username}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Username"
                textContentType="username"
                onChangeText={onChange}
                value={value}
                error={errors[RegisterFieldName.Username]?.message}
              />
            )}
          />
          <Controller
            control={control}
            name={RegisterFieldName.Email}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={onChange}
                value={value}
                error={errors[RegisterFieldName.Email]?.message}
              />
            )}
          />
          <Controller
            control={control}
            name={RegisterFieldName.Password}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Password"
                textContentType="password"
                secureTextEntry={hiddenPassword}
                onChangeText={onChange}
                value={value}
                iconRight={hiddenPassword ? 'eye-off' : 'eye'}
                onPressIconRight={() => setHiddenPassword(!hiddenPassword)}
                error={errors[RegisterFieldName.Password]?.message}
              />
            )}
          />
          <Controller
            control={control}
            name={RegisterFieldName.ConfirmPassword}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Confirm Password"
                textContentType="password"
                secureTextEntry={hiddenPassword}
                onChangeText={onChange}
                value={value}
                iconRight={hiddenPassword ? 'eye-off' : 'eye'}
                onPressIconRight={() => setHiddenPassword(!hiddenPassword)}
                error={errors[RegisterFieldName.ConfirmPassword]?.message}
              />
            )}
          />
          <SpacingContainer marginVertical={10}>
            <Button mode="contained" onPress={handleSubmit(handleRegister)}>
              Signup
            </Button>
          </SpacingContainer>
        </FlexContainer>

        <FlexContainer>
          <SpacingContainer marginVertical={20}>
            <FlexContainer mode="row" justifyContent="center" alignItems="center" gap={5}>
              <Text size="BodyMedium">Already have an account? </Text>
              <Text
                size="BodyMedium"
                mode="link"
                onPress={() => {
                  navigation.navigate(AuthRoutesName.Login);
                }}>
                Log in
              </Text>
            </FlexContainer>
          </SpacingContainer>
        </FlexContainer>
      </SpacingContainer>
    </Container>
  );
};

export default Register;
