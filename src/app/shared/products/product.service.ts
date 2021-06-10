import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from '../../core/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  private jsonFileURL = 'http://localhost:8080/api/public/allProducts';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

  }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.jsonFileURL);
  }
}
