export class AuthUserDto  {
  readonly id:number;
  readonly username:string;
}

export class AuthJwtPayload {
  readonly userId:string;
  readonly userName:string;
}