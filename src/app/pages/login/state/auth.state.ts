
import {Action, Selector, State, StateContext} from '@ngxs/store';
import { AuthStateModel, Login, Logout} from './auth.action';
import { LoginService } from '../login.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/core/tokenStorage/tokenStorageService';
import { Roles } from 'src/app/core/interfaces/role';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    loggedInUser:null,
    accessToken: null,
    username: null,
    email:null,
    roles:null

  }
})
@Injectable()
export class AuthState {
  result: any;

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.accessToken;
  }
  @Selector()
  static loggedInUser(state: AuthStateModel) {
    return state.loggedInUser;
  }
  @Selector()
  static role(state: AuthStateModel) {
    return state.roles;
  }

  @Selector()
  static loggedInUserName(state: AuthStateModel) {
    return state.username;
  }
  constructor(private loginService: LoginService, private tokenStorage: TokenStorageService) {}

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.loginService.login(action.payload.username, action.payload.password).pipe(
      tap((result: { accessToken: string, username:string,email:string,roles:Roles,loggedInUser:string,id:number, password:string, name:string, token:string}) => {
        console.log(result);
        this.tokenStorage.saveUser(result);
        this.tokenStorage.saveToken(result.accessToken)
      ctx.patchState({
        loggedInUser:result,
        accessToken: result.accessToken,
        username: result.username,
        email:result.email,
        roles:result.roles
      });
    })
  );
  }

@Action(Logout)
logout({getState, setState,dispatch}: StateContext<AuthStateModel>) {
  return this.loginService.logout()
    .pipe(tap((result) => {
        const state = getState();
        setState({...state,
          loggedInUser:null,
          accessToken: null,
          username: null,
          email:null,
          roles:null,
        });
      })
    );
}
}


