export class BaseViewModel<T> {
  constructor(
    readonly data:T,
    readonly status:boolean = true,
    readonly message:string = '',
  ){}
}
