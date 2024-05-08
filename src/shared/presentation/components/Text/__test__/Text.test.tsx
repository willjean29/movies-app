import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import Text from '../Text';
import { RenderResult, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { FontSize } from '@shared/config/constants/font-sizes';

const renderTextComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};
describe('Text component', () => {
  it('should render with children', async () => {
    await renderTextComponent(<Text>Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });
  it('should render with children and style', async () => {
    await renderTextComponent(<Text style={{ color: 'red' }}>Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });
  it('should render with children and testID', async () => {
    await renderTextComponent(<Text testID="text">Hello word</Text>);
    expect(screen.getByTestId('text')).toBeTruthy();
  });
  it('should render with link mode', async () => {
    await renderTextComponent(<Text mode="link">Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });

  it('should render with secundary mode', async () => {
    await renderTextComponent(<Text mode="secondary">Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });

  it('should render with bold weight', async () => {
    await renderTextComponent(<Text weight="bold">Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });

  it('should render with bold weight', async () => {
    await renderTextComponent(<Text weight="bold">Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });

  it('should render with center align', async () => {
    await renderTextComponent(<Text align="center">Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });

  it('should render with right align', async () => {
    await renderTextComponent(<Text align="right">Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });

  it('should render with left align', async () => {
    await renderTextComponent(<Text align="left">Hello word</Text>);
    expect(screen.getByText('Hello word')).toBeTruthy();
  });
  it('should render with the HeadlineMedium size', async () => {
    await renderTextComponent(<Text size="HeadlineMedium">Test</Text>);
    expect(screen.getByText('Test')).toHaveStyle({ fontSize: FontSize.HeadlineMedium });
  });

  it('should render with default font size when size prop is not provided', async () => {
    await renderTextComponent(<Text>Test</Text>);
    expect(screen.getByText('Test')).toHaveStyle({ fontSize: FontSize.BodyLarge });
  });
});
