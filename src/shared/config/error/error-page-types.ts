export interface ErrorPageProps {
  title: string;
  subtitle: string;
  Icon: React.ReactNode;
  primaryText: string;
  primaryAction: () => void;
  secondaryText?: string;
  secondaryAction?: () => void;
  children?: React.ReactNode;
}

export const enum ErrorPresentation {
  Page = 'page',
  Modal = 'modal',
  Dialogue = 'dialogue',
}

export interface ErrorPageInterface extends ErrorPageProps {
  code?: string;
  presentation?: ErrorPresentation;
}
