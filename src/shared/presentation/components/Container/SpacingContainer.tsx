import React from 'react';
import {View, ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface ExtraStyledSpacingContainerComponentProps {
  children: React.ReactNode;
  spacing?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  flex?: number;
}
type StyledSpacingContainerComponentProps = ViewProps &
  ExtraStyledSpacingContainerComponentProps;

const StyledSpacingContainerComponent: React.FC<
  StyledSpacingContainerComponentProps
> = ({
  children,
  paddingVertical = 0,
  paddingHorizontal = 0,
  marginVertical = 0,
  marginHorizontal = 0,
  spacing = 0,
  flex,
  ...props
}) => {
  return (
    <StyledContainer
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
      flex={flex}
      {...props}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.View<ExtraStyledSpacingContainerComponentProps>`
  ${props => props.flex && `flex: ${props.flex};`}
  padding-top: ${props => props.paddingVertical}px;
  padding-bottom: ${props => props.paddingVertical}px;
  padding-left: ${props => props.paddingHorizontal}px;
  padding-right: ${props => props.paddingHorizontal}px;
  margin-top: ${props => props.marginVertical}px;
  margin-bottom: ${props => props.marginVertical}px;
  margin-left: ${props => props.marginHorizontal}px;
  margin-right: ${props => props.marginHorizontal}px;
`;

export default StyledSpacingContainerComponent;
