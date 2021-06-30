import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { Cart } from "src/app/core/interfaces/cart";
import { CartItem } from "src/app/core/interfaces/cartItem";
import { Product } from "src/app/core/interfaces/products";
import { CartService } from "../cart.service";
import { GetCart } from "./cart.action";

export class CartStateModel {
  cart: Cart|undefined;
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    cart:undefined,
  }
})

@Injectable()
export class CartState {
  cart!: Cart

@Selector()
static cart(state: CartStateModel) {
  return state.cart;
}
constructor(private cartService:CartService) {}

@Action(GetCart)
getCart(ctx: StateContext<CartStateModel>, action: GetCart ){
  const state = ctx.getState();
  return this.cartService.getCartByUserId(action.payload).pipe(
      tap((result) => {
        ctx.setState({
          ...state,cart:result,
        });
      })
  );
  }
}


