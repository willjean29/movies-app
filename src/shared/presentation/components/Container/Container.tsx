import {View, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

interface ExtraStyledContainerComponentProps {
  children: React.ReactNode;
  /** Determines whether a scrollview is used to display when the keyboard is active */
  isViewKeyboardAware?: boolean;
}
type StyledContainerComponentProps = ViewProps &
  ExtraStyledContainerComponentProps;

const StyledContainerComponent: React.FC<StyledContainerComponentProps> = ({
  children,
  style,
  isViewKeyboardAware = false,
  ...props
}) => {
  const {top, bottom, left, right} = useSafeAreaInsets();
  return (
    <StyledContainer
      style={[
        {
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        },
        style,
      ]}
      {...props}>
      {isViewKeyboardAware ? (
        <KeyboardAwareScrollView style={{flex: 1}}>
          <View style={{minHeight: '100%'}}>{children}</View>
        </KeyboardAwareScrollView>
      ) : (
        children
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
`;

export default StyledContainerComponent;
