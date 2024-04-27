import React from 'react';
import {
  Container,
  FlexContainer,
} from '@shared/presentation/components/Container';
import {Image} from '@shared/presentation/components/Image';
import {IconAssets} from '@shared/config/constants/icons';

const Splash = () => {
  return (
    <Container>
      <FlexContainer flex={1} justifyContent="center" alignItems="center">
        <Image source={IconAssets.Logo} />
      </FlexContainer>
    </Container>
  );
};

export default Splash;
