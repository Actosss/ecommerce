import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ID = 'user-id';
const USER_CART ='user-cart';
const CART_ID ='cart-id'
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  public signOut():void {
   return window.sessionStorage.clear(),window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    window.sessionStorage.setItem(USER_ID, JSON.stringify(user.id));
  }
  public saveCart(cart:any):void {
    window.sessionStorage.setItem(USER_CART,JSON.stringify(cart));
    window.sessionStorage.setItem(CART_ID,JSON.stringify(cart.id));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}


