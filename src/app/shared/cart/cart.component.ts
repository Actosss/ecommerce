import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartState} from './state/cart.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteCartItem, GetCart, } from './state/cart.action';
import { ProfileState } from 'src/app/pages/profile/state/profile.state';
import { UserProfile } from 'src/app/core/interfaces/userProfile';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  @Select(ProfileState.userProfile) userProfile$!: Observable<UserProfile>;
  @Select(CartState.cart)cart$!: Observable<Cart>;

  private userId!:number;
  private cartId!:number;

  constructor(private store:Store) {}

  ngOnInit(){
     this.userProfile$.subscribe(userProfile => {
      this.userId = userProfile.id
      this.store.dispatch(new GetCart(this.userId))
    });
    this.cart$.subscribe(cart => {
      this.cartId=cart.id;
      console.log(this.cartId)
    })
  }

  deleteCartItem(id:number){
    this.store.dispatch(new DeleteCartItem(this.cartId,id))
  }
  ngOnDestroy() {
    this.userProfile$.subscribe();
    this.cart$.subscribe();
  }
 }

