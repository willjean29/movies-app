import React from 'react';
import {TextInputProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {TypeTheme} from '@shared/presentation/theme/ThemeProvider';
import {Text, TextError} from '../Text';
import {Icon} from '../Icon';

interface ExtraStyledInputComponentProps {
  iconRight?: string;
  iconLeft?: string;
  iconSize?: number;
  error?: string;
  onPressIconRight?: () => void;
  onPressIconLeft?: () => void;
}

type StyledInputComponentProps = TextInputProps &
  ExtraStyledInputComponentProps;

const StyledInputComponent: React.FC<StyledInputComponentProps> = ({
  iconLeft,
  iconRight,
  iconSize,
  error,
  onPressIconRight,
  onPressIconLeft,
  ...props
}) => {
  const {colors} = useTheme() as TypeTheme;
  return (
    <>
      <StyledInputWrapper error={error}>
        {iconLeft && (
          <Icon
            name={iconLeft}
            size={iconSize || 20}
            onPress={onPressIconLeft}
            color={colors.primaryText}
          />
        )}

        <StyledInput placeholderTextColor={colors.primaryText} {...props} />
        {iconRight && (
          <Icon
            name={iconRight}
            size={iconSize || 20}
            onPress={onPressIconRight}
            color={colors.primaryText}
          />
        )}
      </StyledInputWrapper>
      {error && <TextError message={error} />}
    </>
  );
};

const StyledInputWrapper = styled.View<ExtraStyledInputComponentProps>`
  flex-direction: row;
  background-color: ${props => props.theme.colors.background};
  border-radius: 10px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: ${props =>
    props.error ? props.theme.colors.error : props.theme.colors.border};
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;
`;
const StyledInput = styled.TextInput`
  font-size: 16px;
  flex: 1;
  height: 100%;
  color: ${props => props.theme.colors.primaryText};
`;

export default StyledInputComponent;
