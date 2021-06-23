import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from './cart.service';
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
  displayedColumns: string[] = ['quantity', 'product', 'price','actions'];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  public dataSource: MatTableDataSource<CartItem> = new MatTableDataSource<CartItem>();

  constructor( private cartService:CartService) {
  }
  ngOnInit(): void {

  }

  loadData()  {
    this.cartService.getCartItemsByCartId(localStorage.getItem('cart-id')).subscribe((data)=>{
      this.cartItems = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource<CartItem>(this.cartItems)
    })
  }
  saveCartData(){
    this.cartService.getCart(localStorage.getItem('cart-id')).subscribe((cartData) => {
      this.cart = cartData;
      console.log(cartData)
    });
  }
  deleteItem(cartItem: any){
    console.log(cartItem)
  }
}
