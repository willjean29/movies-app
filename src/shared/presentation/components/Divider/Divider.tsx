import React from 'react';
import {ViewProps} from 'react-native';
import styled, {css} from 'styled-components/native';
interface ExtraStyledDividerProps {
  flexible?: boolean;
}
type StyledDividerProps = ViewProps & ExtraStyledDividerProps;
const StyledDividerComponent: React.FC<StyledDividerProps> = ({
  flexible = false,
  ...props
}) => {
  return <StyledDivider flexible={flexible} {...props} />;
};

const StyledDivider = styled.View<ExtraStyledDividerProps>`
  width: 100%;
  opacity: 0.2;
  height: 2px;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.gray};
  ${props =>
    props.flexible &&
    css`
      flex: 1;
    `}
`;

export default StyledDividerComponent;
