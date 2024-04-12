import React from 'react';
import styled from 'styled-components/native';
import Text from './Text';
import {SpacingContainer} from '../';
interface TextErrorProps {
  message: string;
}
const TextError: React.FC<TextErrorProps> = ({message}) => {
  return (
    <SpacingContainer paddingHorizontal={20}>
      <StyledTextError size="BodyMedium">{message}</StyledTextError>
    </SpacingContainer>
  );
};

const StyledTextError = styled(Text)`
  color: ${props => props.theme.colors.error};
`;

export default TextError;
