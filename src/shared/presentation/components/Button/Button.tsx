import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {Text} from '../';
interface ExtraStyledButtonProps {
  children: React.ReactNode;
}
type StyledButtonProps = TouchableOpacityProps & ExtraStyledButtonProps;

const StyledButtonComponent: React.FC<StyledButtonProps> = ({children}) => {
  return (
    <StyledButton>
      <Text size="BodyLarge">{children}</Text>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  width: '100%';
  height: auto;
  padding: 10px;
  border-radius: 5px;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
`;

export default StyledButtonComponent;
