import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import {FontSize, FontSizeType} from './font-sizes';
interface ExtraTextProps {
  children: React.ReactNode;
  size: FontSizeType;
}

type StyledTextComponentProps = TextProps & ExtraTextProps;

const StyledTextComponent: React.FC<StyledTextComponentProps> = ({
  children,
  size,
  ...props
}) => {
  return (
    <StyledText size={size} {...props}>
      {children}
    </StyledText>
  );
};

interface StyledTextProps extends Omit<ExtraTextProps, 'children'> {}
const StyledText = styled.Text<StyledTextProps>`
  font-size: ${props => FontSize[props.size]};
  color: ${props => props.theme.colors.white};
  text-align: left;
`;

export default StyledTextComponent;
