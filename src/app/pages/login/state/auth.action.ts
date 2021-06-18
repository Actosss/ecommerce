
export class AuthStateModel {
  accessToken!: string | null;
      username!: string | null;
      email!:string|null;
      role!:string |null;

}
export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { username: string, password: string }) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
