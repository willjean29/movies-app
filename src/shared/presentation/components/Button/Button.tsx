import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {Text} from '../';
interface ExtraButtonProps {
  children: React.ReactNode;
}
type ButtonProps = TouchableOpacityProps & ExtraButtonProps;

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <ButtonContainer>
      <Text size="BodyLarge">{children}</Text>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  width: '100%';
  height: auto;
  padding: 10px;
  border-radius: 5px;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
`;

export default Button;
