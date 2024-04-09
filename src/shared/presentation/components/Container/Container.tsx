import {ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface ExtraContainerProps {
  children: React.ReactNode;
}
type ContainerProps = ViewProps & ExtraContainerProps;
const StyledContainerComponent: React.FC<ContainerProps> = ({
  children,
  style,
  ...props
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <StyledContainer style={[{paddingTop: top}, style]} {...props}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
`;

export default StyledContainerComponent;
