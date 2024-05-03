import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface ExtraStyledFlexContainerComponentProps {
  children: React.ReactNode;
  mode?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  flex?: number;
  gap?: number;
  width?: number;
  height?: number;
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
  flex,
  width,
  height,
  wrap,
  ...props
}) => {
  return (
    <StyledFlexContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      mode={mode}
      width={width}
      height={height}
      flex={flex}
      gap={gap}
      wrap={wrap}
      {...props}>
      {children}
    </StyledFlexContainer>
  );
};

const StyledFlexContainer = styled.View<ExtraStyledFlexContainerComponentProps>`
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  height: ${props => (props.height ? `${props.height}px` : 'auto')};
  ${props => props.mode && `flex-direction: ${props.mode};`}
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.gap && `gap: ${props.gap}px;`}
  ${props => props.wrap && `flex-wrap: ${props.wrap};`}
`;

export default StyledFlexContainerComponent;
