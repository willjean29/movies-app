import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon, IconProps} from 'react-native-vector-icons/Icon';
import styled, {useTheme} from 'styled-components/native';
import {TypeTheme} from '@shared/presentation/theme/ThemeProvider';

interface ExtraStyledIconComponentProps {
  mode?: 'icon' | 'button';
}
type StyledIconComponentProps = ExtraStyledIconComponentProps & IconProps;
const StyledIconComponent: React.FC<StyledIconComponentProps> = ({
  color,
  onPress,
  mode = 'icon',
  ...props
}) => {
  const {colors} = useTheme() as TypeTheme;
  if (mode === 'button') {
    return (
      <StyledIconButton activeOpacity={1} onPress={onPress}>
        <MaterialCommunityIcons color={colors.white} {...props} />
      </StyledIconButton>
    );
  }
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <MaterialCommunityIcons color={color} {...props} />
    </TouchableOpacity>
  );
};

const StyledIconButton = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export default StyledIconComponent;
