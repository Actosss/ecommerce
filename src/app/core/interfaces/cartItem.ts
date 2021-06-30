import { Product } from "./products";

export interface CartItem {
  id: number;
  quantity:number;
  totalPrice:number;
  product: Product;
}
