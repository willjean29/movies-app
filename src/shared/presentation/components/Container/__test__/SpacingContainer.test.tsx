import { ReactNode } from 'react';
import { RenderResult, screen } from '@testing-library/react-native';
import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import SpacingContainer from '../SpacingContainer';
import { View, Text } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const renderContainerComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};

describe('SpacingContainer component', () => {
  it('should render with flex props', async () => {
    await renderContainerComponent(
      <SpacingContainer flex={1}>
        <View>
          <Text>Hello word</Text>
        </View>
      </SpacingContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
  });

  it('should render with paddingVertical props', async () => {
    await renderContainerComponent(
      <SpacingContainer testID="spcaing-container" paddingVertical={10}>
        <View>
          <Text>Hello word</Text>
        </View>
      </SpacingContainer>,
    );
    expect(screen.getByTestId('spcaing-container')).toHaveStyle({
      paddingTop: verticalScale(10),
      paddingBottom: verticalScale(10),
    });
  });

  it('should render with paddingHorizontal props', async () => {
    await renderContainerComponent(
      <SpacingContainer testID="spcaing-container" paddingHorizontal={10}>
        <View>
          <Text>Hello word</Text>
        </View>
      </SpacingContainer>,
    );
    expect(screen.getByTestId('spcaing-container')).toHaveStyle({ paddingLeft: scale(10), paddingRight: scale(10) });
  });
});
