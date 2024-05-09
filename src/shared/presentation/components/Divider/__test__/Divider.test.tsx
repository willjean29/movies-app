import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import { RenderResult, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import Divider from '../Divider';
import { lightTheme } from '@shared/config/theme';
const renderTextComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};

describe('Divider component', () => {
  it('should render with default props', async () => {
    await renderTextComponent(<Divider testID="divider" />);
    expect(screen.getByTestId('divider')).toHaveStyle({
      backgroundColor: lightTheme.colors.border,
      height: 2,
      width: '100%',
    });
  });
  it('should render with custom flexible props', async () => {
    await renderTextComponent(<Divider testID="divider" flexible />);
    expect(screen.getByTestId('divider')).toHaveProp('flexible', true);
  });
});
