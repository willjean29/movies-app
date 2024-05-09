import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import { fireEvent, RenderResult, screen, waitFor } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { IconAssets } from '@shared/config/constants/icons';
import Image from '../Image';

const renderImageComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};
const spinner = () => screen.queryByTestId('spinner');
describe('Image component', () => {
  it('should render with default props', async () => {
    await renderImageComponent(<Image testID="image" source={IconAssets.Logo} imgWidth={undefined} imgHeight={undefined} />);
    expect(screen.getByTestId('image')).toBeTruthy();
  });

  it('should render with width and height props', async () => {
    await renderImageComponent(<Image testID="image" source={IconAssets.Logo} imgWidth={100} imgHeight={100} />);
    expect(screen.getByTestId('image')).toHaveStyle({
      width: '100%',
      height: '100%',
    });
  });

  it('should render with flex props', async () => {
    await renderImageComponent(<Image testID="image" source={IconAssets.Logo} flex={1} />);
    expect(screen.getByTestId('image')).toBeTruthy();
  });
  it('should render and call onLoadEnd', async () => {
    await renderImageComponent(<Image testID="image" source={IconAssets.Logo} />);
    expect(spinner()).toBeTruthy();
    await waitFor(() => fireEvent(screen.getByTestId('image'), 'onLoadEnd'));
    expect(spinner()).toBeNull();
  });
});
