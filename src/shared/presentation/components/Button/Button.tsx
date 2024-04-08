import React from 'react';
import {Text, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
interface ExtraButtonProps {
  text?: string;
}
type ButtonProps = TouchableOpacityProps & ExtraButtonProps;

const Button: React.FC<ButtonProps> = ({text = 'Login'}) => {
  return (
    <ButtonContainer>
      <Text>{text}</Text>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  width: '100%';
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
`;

export default Button;
