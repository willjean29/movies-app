import {RequestError} from './request-error';

export class ErrorApp<T> extends Error {
  readonly code: T;
  readonly status?: number;
  readonly title?: string;
  readonly type?: string;

  constructor({code, message, status, title, type}: RequestError<T>) {
    super(message);
    this.name = 'ErrorApp';
    this.code = code;
    this.status = status;
    this.title = title;
    this.type = type;
  }
}
