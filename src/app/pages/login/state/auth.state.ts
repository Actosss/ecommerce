
import {Action, Selector, State, StateContext} from '@ngxs/store';
import { AuthStateModel, Login, Logout} from './auth.action';
import { LoginService } from '../login.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/core/tokenStorage/tokenStorageService';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    accessToken: null,
    username: null,
    email:null,
    role:null

  }
})
@Injectable()
export class AuthState {
  result: any;

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.accessToken;
  }

  constructor(private loginService: LoginService, private tokenStorage: TokenStorageService) {}

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.loginService.login(action.payload.username, action.payload.password).pipe(
      tap((result: { accessToken: string, username:string,email:string,role:string}) => {
        console.log(result);
        this.tokenStorage.saveUser(result);
        this.tokenStorage.saveToken(result.accessToken)
      ctx.patchState({
        accessToken: result.accessToken,
        username: result.username,
        email:result.email,
        role:result.role
      });
    })
  );
}
  @Action(Logout)
  logout({ setState, getState }: StateContext<AuthStateModel>) {
    const { accessToken } = getState();
    setState(
      {
        username: null,
        accessToken: null,
        email:null,
        role:null
      }
    );
  }
}


