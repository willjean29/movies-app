import {TextProps, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {FontSize, FontSizeType} from '@shared/config/constants/font-sizes';
interface ExtraStyledTextComponentProps {
  children: React.ReactNode;
  size?: FontSizeType;
  align?: 'left' | 'center' | 'right';
  mode?: 'primary' | 'secondary' | 'link';
  weight?: 'bold' | 'normal' | 'italic';
}

type StyledTextComponentProps = TextProps & ExtraStyledTextComponentProps;

const StyledTextComponent: React.FC<StyledTextComponentProps> = ({
  children,
  size = 'BodyLarge',
  align = 'left',
  mode = 'primary',
  weight = 'normal',
  onPress,
  ...props
}) => {
  const StyledTextElement = () => (
    <StyledText
      weight={weight}
      mode={mode}
      size={size}
      align={align}
      {...props}>
      {children}
    </StyledText>
  );

  if (mode === 'link') {
    return (
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <StyledTextElement />
      </TouchableOpacity>
    );
  }
  return <StyledTextElement />;
};

interface StyledTextProps
  extends Omit<ExtraStyledTextComponentProps, 'children'> {}

const StyledText = styled.Text<StyledTextProps>`
  font-size: ${props =>
    props.size ? `${FontSize[props.size]}px` : `${FontSize.BodyLarge}px`};
  font-weight: ${props => props.weight};
  color: ${props => {
    switch (props.mode) {
      case 'primary':
        return props.theme.colors.primaryText;
      case 'secondary':
        return props.theme.colors.gray;
      case 'link':
        return props.theme.colors.primary;
    }
  }};
  text-align: ${props => props.align};
`;

export default StyledTextComponent;
