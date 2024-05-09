import { ImageSourcePropType, ImageProps } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components/native';
import { TypeTheme } from '@shared/config/theme';
import { scale } from 'react-native-size-matters';

interface StyledImageComponetProps {
  source?: ImageSourcePropType;
  flex?: number;
  imgWidth?: number;
  imgHeight?: number;
}
const StyledImageComponet: React.FC<StyledImageComponetProps & ImageProps> = ({
  source,
  imgWidth = 80,
  imgHeight = 80,
  flex,
  ...props
}) => {
  const { colors } = useTheme() as TypeTheme;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StyledImageWrapper imgWidth={scale(imgWidth)} imgHeight={scale(imgHeight)} flex={flex}>
      {isLoading && <StyledSpinner testID="spinner" size="large" color={colors.primary} />}
      <StyledImage
        style={{
          opacity: isLoading ? 0 : 1,
          resizeMode: 'contain',
        }}
        source={source}
        onLoadEnd={() => setIsLoading(false)}
        {...props}
      />
    </StyledImageWrapper>
  );
};
const StyledImageWrapper = styled.View<StyledImageComponetProps>`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  ${(props) => (props.flex ? `flex: ${props.flex};` : `width: ${props.imgWidth}px; height: ${props.imgHeight}px`)}
`;
const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const StyledSpinner = styled.ActivityIndicator`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  right: 50%;
  bottom: 50%;
`;

export default StyledImageComponet;
