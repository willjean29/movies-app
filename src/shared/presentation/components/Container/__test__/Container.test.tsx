import { ReactNode } from 'react';
import { RenderResult, screen } from '@testing-library/react-native';
import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import Container from '../Container';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

jest.mock('react-native-keyboard-aware-scroll-view', () => ({
  KeyboardAwareScrollView: jest.fn(({ children }) => <>{children}</>),
}));
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(() => ({ top: 20 })), // Simulamos el valor de top
}));

const renderContainerComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};
describe('Container component', () => {
  it('should render without KeyboardAwareScrollView when isViewKeyboardAware is false', async () => {
    await renderContainerComponent(
      <Container>
        <View>
          <Text>Hello word</Text>
        </View>
      </Container>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(KeyboardAwareScrollView).not.toHaveBeenCalled();
  });

  it('should render with KeyboardAwareScrollView when isViewKeyboardAware is true', async () => {
    await renderContainerComponent(
      <Container isViewKeyboardAware={true}>
        <View>
          <Text>Hello word</Text>
        </View>
      </Container>,
    );

    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(KeyboardAwareScrollView).toHaveBeenCalled();
  });
});
