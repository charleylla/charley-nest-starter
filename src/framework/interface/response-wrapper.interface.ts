export interface ResponseWrapper<T> {
  readonly status:boolean,
  readonly message?:string,
  readonly data:T,
}
