import {ImageSourcePropType, ImageProps} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import {TypeTheme} from '@shared/config/theme';

interface StyledImageComponetProps {
  source?: ImageSourcePropType;
  width?: number;
  height?: number;
}
const StyledImageComponet: React.FC<StyledImageComponetProps & ImageProps> = ({
  source,
  width = 100,
  height = 100,
  ...props
}) => {
  const {colors} = useTheme() as TypeTheme;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <StyledImageWrapper width={width} height={height}>
      {isLoading && <StyledSpinner size="large" color={colors.primary} />}
      <StyledImage
        style={{
          opacity: isLoading ? 0 : 1,
          resizeMode: 'contain',
        }}
        {...props}
        source={source}
        onLoadEnd={() => setIsLoading(false)}
      />
    </StyledImageWrapper>
  );
};
const StyledImageWrapper = styled.View<StyledImageComponetProps>`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
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
