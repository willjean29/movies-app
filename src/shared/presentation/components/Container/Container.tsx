import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface ExtraContainerProps {
  children: React.ReactNode;
}
type ContainerProps = ViewProps & ExtraContainerProps;
const StyledContainerComponent: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

const StyledContainer = styled.View`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
`;

export default StyledContainerComponent;
