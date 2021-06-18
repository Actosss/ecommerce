import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartItem } from 'src/app/core/interfaces/cartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private getCartByUserId = 'http://localhost:8080/api/user/cart/';
  private allCartItemsByCartId = 'http://localhost:8080/api/user/allCartItemsByCartId/';
  constructor(private httpClient :HttpClient) { }

  getCart(id:string|null): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.getCartByUserId + id);
  }
  getCartItemsByCartId(id:string|null): Observable<CartItem[]>{
    return this.httpClient.get<CartItem[]>(this.allCartItemsByCartId + id);
  }
}
