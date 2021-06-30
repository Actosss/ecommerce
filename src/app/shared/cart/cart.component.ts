import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartState} from './state/cart.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { ProfileState } from 'src/app/pages/profile/state/profile.state';
import { GetCart, } from './state/cart.action';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userId! :number;
  cartId! :number;
  cart! :any


  @Select(ProfileState.userProfile) userProfile$!: Observable<UserProfile>;

  @Select(CartState.cart)cart$!: Observable<Cart>;

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.userProfile$.subscribe(userProfileData => {
      this.userId = userProfileData.id

      this.store.dispatch(new GetCart(this.userId));
    });

    this.cart$.subscribe(data => {
      this.cart = data;
      // here you will be able to retrieve your cartItems from the cart object
    });
  }
}

