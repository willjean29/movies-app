import React from 'react';
import {TextInputProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {Icon} from '../';
import {TypeTheme} from '../../theme/ThemeProvider';

interface ExtraStyledInputComponentProps {
  icon?: string;
  size?: number;
}

type StyledInputComponentProps = TextInputProps &
  ExtraStyledInputComponentProps;

const StyledInputComponent: React.FC<StyledInputComponentProps> = ({
  icon,
  size,
  ...props
}) => {
  const {colors} = useTheme() as TypeTheme;
  return (
    <StyledInputWrapper>
      <StyledInput placeholderTextColor={colors.primaryText} {...props} />
      {icon && <Icon name={icon} size={size || 20} />}
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: ${props => props.theme.colors.border};
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const StyledInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  height: 100%;
`;

export default StyledInputComponent;
