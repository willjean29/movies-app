import { Dispatch } from 'react';
import { AppActions } from '@shared/domain/app-actions.enum';
import { DispatchObject } from '@shared/domain/app-store';
import { RequestError } from './request-error';
import { getErrorPage } from './error-page';

export interface HandleErrorProps {
  dispatchApp: Dispatch<DispatchObject<AppActions>>;
  error: RequestError<string>;
}

type HandleErrorFn = (props: HandleErrorProps) => void;
export const handleError: HandleErrorFn = ({ dispatchApp, error }) => {
  if (!error) return;

  const errorPage = getErrorPage({
    ...error,
  });

  dispatchApp({
    type: AppActions.ErrorFetching,
    payload: errorPage,
  });
};
