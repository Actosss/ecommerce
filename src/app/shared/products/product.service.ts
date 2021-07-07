import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product} from '../../core/interfaces/products';

const getListOfProduct = 'http://localhost:8080/api/public/allProducts';
const addItemToCart = 'http://localhost:8080/api/user/addCartItem';
@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

  }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(getListOfProduct);
  }
  addCartItem(cartId:number,cartItemId:number):Observable<any>{
    return this.httpClient.post(addItemToCart,{cartId,cartItemId});
  }
}
