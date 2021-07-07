import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext,  } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { Product } from "src/app/core/interfaces/products";
import { ProductService } from "../product.service";
import { AddCartItem, GetProducts, } from "./product.action";


export class ProductStateModel {
  products: Product[]|undefined;
}

@State<ProductStateModel>({
  name: 'product',
  defaults: {
    products:undefined,
  }
})

@Injectable()
export class ProductState {
  product!: Product[]

@Selector()
static products(state: ProductStateModel) {
  return state.products;
}
constructor(private productService:ProductService) {}

@Action(GetProducts)
getCart(ctx: StateContext<ProductStateModel>){
  const state = ctx.getState();
  return this.productService.getProducts().pipe(
      tap((result) => {
        ctx.setState({...state,products:result,

        });
      })

  );
  }

  @Action(AddCartItem)
addCartItem(ctx: StateContext<ProductStateModel>, action:AddCartItem){
  const state = ctx.getState();
  return this.productService.addCartItem(action.cartId,action.productId).pipe(
      tap((result) => {
        ctx.setState({...state,products:result,

        });
      })

  );
  }
}


