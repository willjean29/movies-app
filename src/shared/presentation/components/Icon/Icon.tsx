import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from 'react-native-vector-icons/Icon';
import styled, { useTheme } from 'styled-components/native';
import { TypeTheme } from '@shared/config/theme';
import { moderateScale, scale } from 'react-native-size-matters';
interface ExtraStyledIconComponentProps {
  mode?: 'icon' | 'button';
}
type StyledIconComponentProps = ExtraStyledIconComponentProps & IconProps;
const StyledIconComponent: React.FC<StyledIconComponentProps> = ({ color, onPress, mode = 'icon', size, ...props }) => {
  const { colors } = useTheme() as TypeTheme;
  if (mode === 'button') {
    return (
      <StyledIconButton activeOpacity={1} onPress={onPress} size={moderateScale(50)}>
        <MaterialCommunityIcons color={colors.white} size={scale(size || 20)} {...props} />
      </StyledIconButton>
    );
  }
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <MaterialCommunityIcons color={color} size={scale(size || 20)} {...props} />
    </TouchableOpacity>
  );
};

const StyledIconButton = styled.TouchableOpacity<{ size: number }>`
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export default StyledIconComponent;
