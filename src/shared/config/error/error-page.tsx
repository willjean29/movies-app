import { RequestError } from './request-error';
import { ErrorPageInterface } from './error-page-types';

interface GetErrorPageInterface extends RequestError<string> {
  onPrimaryActionClick?: () => void;
  onSecondaryActionClick?: () => void;
}
type GetErrorPageFn = (props: GetErrorPageInterface) => ErrorPageInterface;

export const getErrorPage: GetErrorPageFn = ({
  code,
  message: subtitle,
  title = '',
  onPrimaryActionClick = () => {},
  onSecondaryActionClick = () => {},
}) => {
  const defaultErrorPageProps: ErrorPageInterface = {
    code,
    subtitle,
    title,
    primaryText: 'Primary',
    primaryAction: onPrimaryActionClick,
    secondaryText: 'Secondary',
    secondaryAction: onSecondaryActionClick,
    Icon: null,
  };
  return defaultErrorPageProps;
};
