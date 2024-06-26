import { Draft } from 'immer';
import { Dispatch, PropsWithChildren } from 'react';
import { AppActions } from './app-actions.enum';
import { ErrorPageInterface } from '@shared/config/error/error-page-types';
import { UserEntity } from '@modules/auth/domain/entities/user.entity';

export type AppDispatch = Dispatch<DispatchObject<AppActions>>;

export interface AppState {
  user: null | UserEntity;
  theme: 'light' | 'dark';
  pendingFetches: number;
  isFetching: boolean;
  error: null | ErrorPageInterface;
}

export interface DispatchObject<T, P = any> {
  type: T;
  payload?: P;
}

/**
 * Interface that defines the props recieved by a reducer function
 * @template T - The type of the state being reduced
 * @template K - The type of the actions that can be dispatched
 * @extends DispatchObject<K>
 */
export interface ReducerFnProps<T, K> extends DispatchObject<K> {
  draft: Draft<T>;
}

export interface AppReducerFn {
  (props: ReducerFnProps<AppState, AppActions>): void;
}

export interface GlobalAppProviderProps extends PropsWithChildren {
  testStateProps?: Partial<AppState>;
  testDispatch?: AppDispatch;
}
