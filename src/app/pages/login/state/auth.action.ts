import { User } from "src/app/core/interfaces/user";

export class AuthStateModel {
  accessToken!: string | null;
      loggedInUser!: User|null;
      username!: string | null;
      email!:string|null;
      roles!:string |null;

}
export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { username: string, password: string }) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
