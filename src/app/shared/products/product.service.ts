import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product} from '../../core/interfaces/products';

const url = 'http://localhost:8080/api/user/addCartItem?';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {

  constructor(private httpClient: HttpClient) {}

  ngOnInit(){

  }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/public/allProducts');
  }
  addCartItem(cartId:number,productId:number):Observable<any>{
    let httpparams = new HttpParams()
    .set('cartId', cartId)
    .set('productId', productId);
    return this.httpClient.post(url ,httpparams )
  }
}
