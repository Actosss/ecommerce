import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/products';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { ProfileState } from 'src/app/pages/profile/state/profile.state';
import { ProductService } from './product.service';
import { AddCartItem, GetProducts } from './state/product.action';
import { ProductState } from './state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  product!:Product[];
  cartId!:number;
  @Select(ProductState.products)products$!: Observable<Product[]>;
  @Select(ProfileState.userProfile)userProfile$!: Observable<UserProfile>;
  constructor(private productService: ProductService,private store:Store){
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.product = data;
    });
    this.userProfile$.subscribe((userProfile) => {
      this.cartId = userProfile.cart.id;
    });
    this.store.dispatch(new GetProducts());
  }
  addToCart(productId:number){
    this.store.dispatch(new AddCartItem(this.cartId,productId));
  }

  // ngOnDestroy() {
  //   if (this.dataSource) {
  //     this.dataSource.disconnect();
  //   }
  // }
}
