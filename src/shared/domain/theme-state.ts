export type Theme = 'light' | 'dark';

export interface ThemeState {
  mode: Theme;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
