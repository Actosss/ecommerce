import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartState} from './state/cart.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/core/interfaces/userProfile';
import { ProfileState } from 'src/app/pages/profile/state/profile.state';
import { GetCart, } from './state/cart.action';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userId! :number;

  @Select(ProfileState.userProfile) userProfile$!: Observable<UserProfile>;
  @Select(CartState.cart)cart$!: Observable<Cart>;
  toppings = new FormControl();

  toppingList: string[] = ['1','2','3','4','5'];
  constructor(private store:Store) {}

  ngOnInit(): void {
    this.userProfile$.subscribe(userProfileData => {
      this.userId = userProfileData.id
      this.store.dispatch(new GetCart(this.userId))
    });
  }

 }


