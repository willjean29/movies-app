import {ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface ExtraStyledContainerComponentProps {
  children: React.ReactNode;
}
type StyledContainerComponentProps = ViewProps &
  ExtraStyledContainerComponentProps;

const StyledContainerComponent: React.FC<StyledContainerComponentProps> = ({
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
