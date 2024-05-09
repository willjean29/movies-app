import { ReactNode } from 'react';
import { RenderResult, screen } from '@testing-library/react-native';
import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import FlexContainer from '../FlexContainer';
import { View, Text } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const renderContainerComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};

describe('FlexContainer component', () => {
  it('should render with flex props', async () => {
    await renderContainerComponent(
      <FlexContainer flex={1}>
        <View>
          <Text>Hello word</Text>
        </View>
      </FlexContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
  });
  it('should render with with and height props', async () => {
    await renderContainerComponent(
      <FlexContainer testID="flex-container" width={100} height={100}>
        <View>
          <Text>Hello word</Text>
        </View>
      </FlexContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(screen.getByTestId('flex-container')).toHaveStyle({
      width: 100,
      height: 100,
    });
  });

  it('should render with mode props', async () => {
    await renderContainerComponent(
      <FlexContainer testID="flex-container" mode="row">
        <View>
          <Text>Hello word</Text>
        </View>
      </FlexContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(screen.getByTestId('flex-container')).toHaveStyle({
      flexDirection: 'row',
    });
  });

  it('should render with justifyContent props', async () => {
    await renderContainerComponent(
      <FlexContainer testID="flex-container" justifyContent="center">
        <View>
          <Text>Hello word</Text>
        </View>
      </FlexContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(screen.getByTestId('flex-container')).toHaveStyle({
      justifyContent: 'center',
    });
  });
  it('should render with alignItems props', async () => {
    await renderContainerComponent(
      <FlexContainer testID="flex-container" alignItems="center">
        <View>
          <Text>Hello word</Text>
        </View>
      </FlexContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(screen.getByTestId('flex-container')).toHaveStyle({
      alignItems: 'center',
    });
  });

  it('should render with alignSelf props', async () => {
    await renderContainerComponent(
      <FlexContainer testID="flex-container" alignSelf="center">
        <View>
          <Text>Hello word</Text>
        </View>
      </FlexContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(screen.getByTestId('flex-container')).toHaveStyle({
      alignSelf: 'center',
    });
  });

  it('should render with gap props', async () => {
    await renderContainerComponent(
      <FlexContainer testID="flex-container" gap={10}>
        <View>
          <Text>Hello word</Text>
        </View>
      </FlexContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(screen.getByTestId('flex-container')).toHaveStyle({
      gap: 10,
    });
  });

  it('should render with wrap props', async () => {
    await renderContainerComponent(
      <FlexContainer testID="flex-container" wrap="wrap">
        <View>
          <Text>Hello word</Text>
        </View>
      </FlexContainer>,
    );
    expect(screen.getByText('Hello word')).toBeTruthy();
    expect(screen.getByTestId('flex-container')).toHaveStyle({
      flexWrap: 'wrap',
    });
  });
});
