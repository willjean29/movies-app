import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import { RenderResult, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import Button from '../Button';
import { lightTheme } from '@shared/config/theme';
const renderTextComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};

describe('Button component', () => {
  it('should render with text mode default', async () => {
    await renderTextComponent(<Button testID="button">Press me</Button>, { stateProps: { theme: 'light' } });
    expect(screen.getByText('Press me')).toBeTruthy();
    expect(screen.getByTestId('button')).toHaveStyle({ backgroundColor: 'transparent' });
    expect(screen.getByText('Press me')).toHaveStyle({ color: lightTheme.colors.primaryText });
  });
  it('should render with outlined mode', async () => {
    await renderTextComponent(
      <Button testID="button" mode="outlined">
        Press me
      </Button>,
    );
    expect(screen.getByText('Press me')).toBeTruthy();
    expect(screen.getByTestId('button')).toHaveStyle({ backgroundColor: lightTheme.colors.background });
    expect(screen.getByText('Press me')).toHaveStyle({ color: lightTheme.colors.primaryText });
  });
  it('should render with outlined mode', async () => {
    await renderTextComponent(
      <Button testID="button" mode="contained">
        Press me
      </Button>,
    );
    expect(screen.getByText('Press me')).toBeTruthy();
    expect(screen.getByTestId('button')).toHaveStyle({ backgroundColor: lightTheme.colors.primary });
    expect(screen.getByText('Press me')).toHaveStyle({ color: lightTheme.colors.white });
  });
});
