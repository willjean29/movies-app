export interface RequestError<T> {
  code: T;
  message: string;
  status?: number;
  title?: string;
  type?: string;
}
