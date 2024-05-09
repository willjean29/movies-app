import { renderComponent, RenderComponentConfig } from '@shared/presentation/test-utils/renderComponent';
import { RenderResult, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import SocialButton from '../SocialButton';

const renderTextComponent = async (Component: ReactNode, config: RenderComponentConfig = {}): Promise<RenderResult> => {
  return await renderComponent({ Component, ...config });
};
describe('SocialButton component', () => {
  it('should render with social prop is google', async () => {
    await renderTextComponent(<SocialButton social="google" text="Login with google" />);
    expect(screen.getByText('Login with google')).toBeTruthy();
  });

  it('should render with social prop is apple on light mode ', async () => {
    await renderTextComponent(<SocialButton social="apple" text="Login with apple" />, { stateProps: { theme: 'light' } });
    expect(screen.getByText('Login with apple')).toBeTruthy();
  });
  it('should render with social prop is apple on dark mode ', async () => {
    await renderTextComponent(<SocialButton social="apple" text="Login with apple" />, { stateProps: { theme: 'dark' } });
    expect(screen.getByText('Login with apple')).toBeTruthy();
  });
});
