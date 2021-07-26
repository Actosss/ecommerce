export class GetUser {
  static readonly type = '[Profile] getUser';
  constructor(public payload:number) {}
}
export class CleanUser {
  static readonly type = '[Profile] clearUSer';
}
