import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/interfaces/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private getCartByUSerId = 'http://localhost:8080/api/user/getCartByUserId/';
  private deleTCartItem = 'http://localhost:8080/api/user/deleteById/';
  constructor(private httpClient :HttpClient) { }
  getCartByUserId(id:number): Observable<Cart>{
    return this.httpClient.get<Cart>(this.getCartByUSerId + id);
  }
  deleteCartItem(cartId:number,cartItemId:number){
    return this.httpClient.delete<Cart>(this.deleTCartItem +cartItemId +'/conf/'+ cartId );
  }
}
