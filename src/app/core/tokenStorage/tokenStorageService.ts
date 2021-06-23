import { Injectable,  } from '@angular/core';

const TOKEN_KEY = 'token';
const USER_KEY = 'auth';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  public signOut():void{
   window.localStorage.clear();
  }
  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }
  public getUser(): void {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }
}


