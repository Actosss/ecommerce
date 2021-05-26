import { Product } from "./products";

export class CartItem {
  id!: number;
  quantity!:number;
  totalPrice!:number;
  product!: Product;
}
