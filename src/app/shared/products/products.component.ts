import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/interfaces/cart';
import { Product } from 'src/app/core/interfaces/products';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { ProfileState } from 'src/app/pages/profile/state/profile.state';
import { CartState } from '../cart/state/cart.state';
import { AddCartItem, GetProducts } from './state/product.action';
import { ProductState } from './state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  cartId!:number;

  @Select(ProductState.products)products$!: Observable<Product[]>;
  @Select(ProfileState.userProfile)userProfile$!: Observable<UserProfile>;
  @Select(CartState.cart)cart$!: Observable<Cart>;
  constructor(private store:Store){
  }
  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.userProfile$.subscribe(data => {
      this.cartId = data.cart.id;
    })
  }
  addToCart(productId:number){
    this.store.dispatch(new AddCartItem(this.cartId,productId));
  }

}
