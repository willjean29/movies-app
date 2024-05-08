import { AppDispatch, AppState } from '@shared/domain/app-store';
import { render, RenderResult } from '@testing-library/react-native';
import { GlobalAppProvider } from '../store/app-context';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme } from '@shared/config/theme';
export interface RenderComponentConfig {
  basePath?: string;
  page?: string;
  stateProps?: Partial<AppState>;
  dispatchApp?: AppDispatch;
}
interface RenderComponentProps extends RenderComponentConfig {
  Component: React.ReactNode;
}
export const renderComponent = async (props: RenderComponentProps): Promise<RenderResult> => {
  const { Component, stateProps, dispatchApp } = props;
  let component = {} as RenderResult;
  component = render(
    <GlobalAppProvider testStateProps={stateProps} testDispatch={dispatchApp}>
      <ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>
    </GlobalAppProvider>,
  );
  return component;
};
