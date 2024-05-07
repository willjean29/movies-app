import { AppActions } from '@shared/domain/app-actions.enum';
import { useGlobalAppDispatch, useGlobalAppState } from '@shared/presentation/store/app-context';
import { Text, View, TouchableOpacity } from 'react-native';
import { renderComponent, RenderComponentConfig } from '../renderComponent';
import { act, fireEvent, RenderResult, screen } from '@testing-library/react-native';

const TestComponent = () => {
  const { isFetching } = useGlobalAppState();
  const dispatchApp = useGlobalAppDispatch();
  return (
    <View>
      {isFetching && <Text>With Fetching</Text>}
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          dispatchApp({ type: AppActions.IsFetching });
        }}>
        <Text>Run Fetching</Text>
      </TouchableOpacity>
    </View>
  );
};

const getActionButton = () => screen.getByRole('button', { name: 'Run Fetching' });
const getActionText = (value: string) => screen.getByText(value);

const renderTestComponent = async (config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component: <TestComponent />, ...config });
};

describe('renderComponent test util', () => {
  it('should render the component with the default state', async () => {
    await renderTestComponent();
    expect(getActionText('Run Fetching')).toBeDefined();
  });

  it('should render the component with the updated state', async () => {
    await renderTestComponent({
      stateProps: { isFetching: true },
    });
    expect(getActionText('With Fetching')).toBeDefined();
  });

  it('should update the state when the button is clicked', async () => {
    await renderTestComponent();
    expect(screen.queryByText('With Fetching')).toBeNull();
    await act(async () => {
      fireEvent.press(getActionButton());
    });
    expect(getActionText('With Fetching')).toBeDefined();
  });

  it('should call the dispatch function when the button is clicked', async () => {
    const dispatchAppMock = jest.fn();
    await renderTestComponent({ dispatchApp: dispatchAppMock });
    await act(async () => {
      fireEvent.press(getActionButton());
    });
    expect(dispatchAppMock).toHaveBeenCalledWith({ type: AppActions.IsFetching });
  });
});
