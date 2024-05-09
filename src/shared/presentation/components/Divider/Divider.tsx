import React from 'react';
import { ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';
interface ExtraStyledDividerComponentProps {
  flexible?: boolean;
}
type StyledDividerComponentProps = ViewProps & ExtraStyledDividerComponentProps;
const StyledDividerComponent: React.FC<StyledDividerComponentProps> = ({ flexible = false, ...props }) => {
  return <StyledDivider flexible={flexible} {...props} />;
};

const StyledDivider = styled.View<ExtraStyledDividerComponentProps>`
  ${(props) => !props.flexible && `width: 100%;`}
  height: 2px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.border};
  ${(props) => props.flexible && `flex: ${1};`}
`;

export default StyledDividerComponent;
