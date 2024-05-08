import { ReactNode } from 'react';
import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import TextError from '../TextError';
import { screen } from '@testing-library/react-native';
const renderTextErrorComponent = async (Component: ReactNode, config: RenderComponentConfig = {}) => {
  return await renderComponent({ Component, ...config });
};
describe('TextError component', () => {
  it('should render with correct message prop', async () => {
    await renderTextErrorComponent(<TextError message="Error message" />);
    expect(screen.getByText('Error message')).toBeTruthy();
  });
});
