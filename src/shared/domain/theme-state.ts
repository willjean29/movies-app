export type Theme = 'light' | 'dark';

export interface ThemeState {
  mode: Theme;
  setMode: (mode: Theme) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
