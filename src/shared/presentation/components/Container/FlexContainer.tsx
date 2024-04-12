import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface ExtraStyledFlexContainerComponentProps {
  children: React.ReactNode;
  mode?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  flex?: number;
  gap?: number;
}
type StyledFlexContainerComponentProps = ViewProps &
  ExtraStyledFlexContainerComponentProps;

const StyledFlexContainerComponent: React.FC<
  StyledFlexContainerComponentProps
> = ({
  children,
  mode,
  justifyContent,
  alignItems,
  alignSelf,
  gap,
  ...props
}) => {
  return (
    <StyledFlexContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      mode={mode}
      flex={props.flex}
      gap={gap}
      {...props}>
      {children}
    </StyledFlexContainer>
  );
};

const StyledFlexContainer = styled.View<ExtraStyledFlexContainerComponentProps>`
  width: 100%;
  ${props => props.mode && `flex-direction: ${props.mode};`}
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.gap && `gap: ${props.gap}px;`}
`;

export default StyledFlexContainerComponent;
