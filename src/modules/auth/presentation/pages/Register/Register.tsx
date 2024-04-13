import React from 'react';
import {IconAssets} from '@shared/presentation/utils/icons';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  FlexContainer,
  SpacingContainer,
} from '@shared/presentation/components/Container';
import {Text} from '@shared/presentation/components/Text';
import {Button} from '@shared/presentation/components/Button';
import {TextInput} from '@shared/presentation/components/TextInput';
import {Image} from '@shared/presentation/components/Image';
import {AuthRoutesName} from '@modules/auth/domain/routes-names';
import {DeviceDimensions} from '@shared/presentation/utils/device';

const Register = () => {
  const navigation = useNavigation();
  return (
    <Container isViewKeyboardAware>
      <SpacingContainer flex={1} paddingHorizontal={20}>
        <FlexContainer height={DeviceDimensions.Height * 0.7}>
          <FlexContainer alignItems="center">
            <SpacingContainer marginVertical={20}>
              <Image source={IconAssets.Logo} />
            </SpacingContainer>
            <Text size="TitleSmall" align="center" weight="bold">
              Create a New Account{' '}
            </Text>
            <SpacingContainer marginVertical={20} marginHorizontal={60}>
              <Text size="BodyMedium" align="center" mode="secondary">
                Set up your username and password. {'\n'} You can always change
                it later.
              </Text>
            </SpacingContainer>
          </FlexContainer>

          <TextInput placeholder="Username" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Password" />
          <TextInput placeholder="Confirmed Password" />
          <Button mode="contained">Signup</Button>
        </FlexContainer>

        <FlexContainer
          justifyContent="center"
          alignItems="center"
          height={DeviceDimensions.Height * 0.3}>
          <SpacingContainer marginVertical={20}>
            <Text size="BodyMedium" align="center">
              Already have an account?{' '}
              <Text
                size="BodyMedium"
                mode="link"
                onPress={() => {
                  navigation.navigate(AuthRoutesName.Login);
                }}>
                Log in
              </Text>
            </Text>
          </SpacingContainer>
        </FlexContainer>
      </SpacingContainer>
    </Container>
  );
};

export default Register;
