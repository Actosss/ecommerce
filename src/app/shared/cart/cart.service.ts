import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartItem } from 'src/app/core/interfaces/cartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {



  private getCartByUSerId = 'http://localhost:8080/api/user/getCartByUserId/';

  constructor(private httpClient :HttpClient) { }

  getCartByUserId(id:number): Observable<Cart>{
    return this.httpClient.get<Cart>(this.getCartByUSerId + id);
  }
}
