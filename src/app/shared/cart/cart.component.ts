import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from './cart.service';
import { TokenStorageService } from 'src/app/core/tokenStorage/tokenStorageService';
import { MatTableDataSource } from '@angular/material/table';
import { CartItem } from 'src/app/core/interfaces/cartItem';
import { Cart } from 'src/app/core/interfaces/cart';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart:Cart[] =[]
  cartItems:CartItem[] =[];
  cartItemsData: CartItem[] =[];
  displayedColumns: string[] = ['quantity', 'product', 'price','actions'];
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  public dataSource: MatTableDataSource<CartItem> = new MatTableDataSource<CartItem>();

  constructor( private cartService:CartService,private tokenStorageService :TokenStorageService) {
  }
  ngOnInit(): void {
    this.saveCartData();
    this.loadData();
  }
  loadData() {
    this.cartService.getCartItemsByCartId(sessionStorage.getItem('cart-id')).subscribe((cartItemsData)=>{
      this.cartItems = cartItemsData;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource<CartItem>(this.cartItems);
    })
  }
  saveCartData(){
    this.cartService.getCart(sessionStorage.getItem('user-id')).subscribe((cartData) => {
      this.cart = cartData;
      this.tokenStorageService.saveCart(cartData)
    });
  }
  deleteItem(cartItem: any){
    console.log(cartItem)
  }
}
