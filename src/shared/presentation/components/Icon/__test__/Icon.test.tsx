import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import { act, fireEvent, RenderResult, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import Icon from '../Icon';
import { lightTheme } from '@shared/config/theme';

const renderIconComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};

describe('Icon component', () => {
  it('should render with default props', async () => {
    await renderIconComponent(<Icon testID="icon" name="eye" />);
    expect(screen.getByTestId('icon')).toBeTruthy();
  });
  it('should render with button mode', async () => {
    const onPressMock = jest.fn();
    await renderIconComponent(<Icon testID="icon" name="eye" mode="button" onPress={onPressMock} />);
    await act(async () => fireEvent.press(screen.getByTestId('icon')));
    expect(screen.getByTestId('icon')).toHaveStyle({ color: lightTheme.colors.white });
    expect(onPressMock).toHaveBeenCalled();
  });
});
