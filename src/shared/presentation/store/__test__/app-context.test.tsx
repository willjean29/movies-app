import { View, Text, TouchableOpacity } from 'react-native';
import { AppActions } from '@shared/domain/app-actions.enum';
import { act, fireEvent, render, RenderResult, screen } from '@testing-library/react-native';
import { GlobalAppProviderProps } from '@shared/domain/app-store';
import { ErrorApp } from '@shared/config/error';
import { GlobalAppProvider, useGlobalAppDispatch, useGlobalAppState } from '../app-context';

const TestComponent = () => {
  const { isFetching, theme } = useGlobalAppState();
  const dispatchApp = useGlobalAppDispatch();
  return (
    <View>
      {isFetching && <Text>Is Fetching</Text>}
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          dispatchApp({
            type: AppActions.IsFetching,
          });
        }}>
        <Text>Dispatch Action</Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          dispatchApp({
            type: AppActions.SaveThemeMode,
            payload: theme === 'light' ? 'dark' : 'light',
          });
        }}>
        <Text>Dispatch Theme Device</Text>
      </TouchableOpacity>
      <Text>{theme}</Text>
    </View>
  );
};

const getActionButton = (value: string) => screen.getByRole('button', { name: value });
const getActionText = (value: string) => screen.queryByText(value);

const renderTestComponent = async (props: GlobalAppProviderProps = {}): Promise<RenderResult> => {
  let component = {} as RenderResult;
  component = render(
    <GlobalAppProvider {...props}>
      <TestComponent />
    </GlobalAppProvider>,
  );
  return component;
};
describe('GlobalAppProvider', () => {
  let consoleErrorSpy: jest.SpyInstance;
  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('should update internal state', async () => {
    await renderTestComponent();

    expect(getActionText('Is Fetching')).toBeNull();
    await act(async () => fireEvent.press(getActionButton('Dispatch Action')));
    expect(getActionText('Is Fetching')).toBeDefined();
  });

  it('should render component with light theme and set theme to dark theme', async () => {
    await renderTestComponent();

    expect(screen.getByText('light')).toBeDefined();
    await act(async () => fireEvent.press(getActionButton('Dispatch Theme Device')));
    expect(screen.getByText('dark')).toBeDefined();
  });

  it('should call dispatch', async () => {
    const dispatchAppMock = jest.fn();
    await renderTestComponent({ testDispatch: dispatchAppMock });

    expect(dispatchAppMock).not.toHaveBeenCalled();
    await act(async () => fireEvent.press(getActionButton('Dispatch Action')));
    expect(dispatchAppMock).toHaveBeenCalledTimes(1);
    expect(dispatchAppMock).toHaveBeenCalledWith({ type: AppActions.IsFetching });
  });

  it('should throw error that you must use useGlobalAppState inside AppStateContext', () => {
    const TestComponent = () => {
      useGlobalAppState();

      return <div>Test</div>;
    };

    try {
      render(<TestComponent />);
    } catch (error) {
      const { message } = error as ErrorApp<string>;
      expect(message).toBe('useGlobalAppState must be used within a AppStateContext');
    }
  });

  it('should throw error that you must use useGlobalAppDispatch inside AppDispatchContext', () => {
    const TestComponent = () => {
      useGlobalAppDispatch();

      return <div>Test</div>;
    };

    try {
      render(<TestComponent />);
    } catch (error) {
      const { message } = error as ErrorApp<string>;

      expect(message).toBe('useGlobalAppDispatch must be used within a AppDispatchContext');
    }
  });
});
