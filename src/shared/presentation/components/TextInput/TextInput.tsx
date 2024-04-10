import React from 'react';
import {TextInputProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {Icon} from '../';
import {TypeTheme} from '../../theme/ThemeProvider';

interface ExtraStyledInputComponentProps {
  iconRight?: string;
  iconLeft?: string;
  onPressIconRight?: () => void;
  onPressIconLeft?: () => void;
  iconSize?: number;
}

type StyledInputComponentProps = TextInputProps &
  ExtraStyledInputComponentProps;

const StyledInputComponent: React.FC<StyledInputComponentProps> = ({
  iconLeft,
  iconRight,
  iconSize,
  onPressIconRight,
  onPressIconLeft,
  ...props
}) => {
  const {colors} = useTheme() as TypeTheme;
  return (
    <StyledInputWrapper>
      {iconLeft && (
        <Icon name={iconLeft} size={iconSize || 20} onPress={onPressIconLeft} />
      )}

      <StyledInput placeholderTextColor={colors.primaryText} {...props} />
      {iconRight && (
        <Icon
          name={iconRight}
          size={iconSize || 20}
          onPress={onPressIconRight}
        />
      )}
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
  gap: 10px;
`;
const StyledInput = styled.TextInput`
  font-size: 16px;
  flex: 1;
  height: 100%;
`;

export default StyledInputComponent;
