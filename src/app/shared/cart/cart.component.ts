import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartState} from './state/cart.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetCart, } from './state/cart.action';
import { User } from 'src/app/core/interfaces/user';
import { AuthState } from 'src/app/pages/login/state/auth.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userId!:number;

  @Select(AuthState.loggedInUser) logedInUser$!: Observable<User>;
  @Select(CartState.cart)cart$!: Observable<Cart>;
  constructor(private store:Store) {}

  ngOnInit(): void {
      this.logedInUser$.subscribe(logedInUser => {
      this.userId = logedInUser.id
      this.store.dispatch(new GetCart(this.userId))
    });
  }
  ngOnDestroy() {

  }
 }

