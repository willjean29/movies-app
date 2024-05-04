import React from 'react';
import {TextInputProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {TypeTheme} from '@shared/config/theme';
import {TextError} from '../Text';
import {Icon} from '../Icon';
import {moderateScale} from 'react-native-size-matters';
import {FontSize} from '@shared/config/constants/font-sizes';

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
  border-radius: ${() => moderateScale(10)}px;
  height: ${() => moderateScale(50)}px;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: ${props =>
    props.error ? props.theme.colors.error : props.theme.colors.border};
  padding: 0 ${() => moderateScale(10)}px;
  margin-top: ${() => moderateScale(10)}px;
  margin-bottom: ${() => moderateScale(10)}px;
  gap: ${() => moderateScale(10)}px;
`;
const StyledInput = styled.TextInput`
  font-size: ${FontSize.BodyLarge}px;
  flex: 1;
  height: 100%;
  color: ${props => props.theme.colors.primaryText};
`;

export default StyledInputComponent;
