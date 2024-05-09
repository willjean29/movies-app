import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import { fireEvent, RenderResult, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { lightTheme } from '@shared/config/theme';
import { act } from 'react-test-renderer';
import TextInput from '../TextInput';
const renderIconComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};

describe('TextInput component', () => {
  it('should render with default props', async () => {
    await renderIconComponent(<TextInput testID="input" />);
    expect(screen.getByTestId('input')).toBeTruthy();
  });

  it('should render with secure text entry', async () => {
    await renderIconComponent(<TextInput testID="input" secureTextEntry />);
    expect(screen.getByTestId('input')).toHaveProp('secureTextEntry', true);
  });

  it('should render with left icon', async () => {
    await renderIconComponent(<TextInput testID="input" iconLeft="eye" />);
    expect(screen.getByTestId('input')).toBeTruthy();
    expect(screen.getByTestId('left-icon')).toBeTruthy();
  });

  it('should render with right icon', async () => {
    await renderIconComponent(<TextInput testID="input" iconRight="eye" />);
    expect(screen.getByTestId('input')).toBeTruthy();
    expect(screen.getByTestId('right-icon')).toBeTruthy();
  });

  it('should render with error message', async () => {
    await renderIconComponent(<TextInput testID="input" error="error message" />);
    expect(screen.getByText('error message')).toBeTruthy();
  });
});
