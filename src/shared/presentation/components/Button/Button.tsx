import {ImageProps, TextStyle, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components/native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {TypeTheme} from '@shared/config/theme';
import {Text} from '../Text';

interface ExtraStyledButtonComponentProps {
  children: React.ReactNode;
  mode?: 'text' | 'outlined' | 'contained';
  icon?: React.ReactElement<IconProps | ImageProps>;
}
type StyledButtonComponentProps = TouchableOpacityProps &
  ExtraStyledButtonComponentProps;

const StyledButtonComponent: React.FC<StyledButtonComponentProps> = ({
  children,
  mode = 'text',
  icon,
  ...props
}) => {
  const {colors} = useTheme() as TypeTheme;

  const selectStylesText = (): TextStyle => {
    switch (mode) {
      case 'text':
        return {
          color: colors.primaryText,
        };
      case 'outlined':
        return {
          color: colors.primaryText,
        };
      case 'contained':
        return {
          color: colors.white,
        };
    }
  };
  return (
    <StyledButton activeOpacity={0.6} mode={mode} {...props}>
      {icon}
      <Text size="BodyLarge" style={[selectStylesText()]}>
        {children}
      </Text>
    </StyledButton>
  );
};
interface StyledButtonProps
  extends Omit<ExtraStyledButtonComponentProps, 'children'> {}
const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${props => {
    switch (props.mode) {
      case 'text':
        return 'transparent';
      case 'outlined':
        return props.theme.colors.background;
      case 'contained':
        return props.theme.colors.primary;
      default:
        return 'transparent';
    }
  }};
  border-width: ${props => (props.mode === 'outlined' ? '1px' : '0px')};
  border-color: ${props =>
    props.mode === 'outlined' && props.theme.colors.border};
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default StyledButtonComponent;
