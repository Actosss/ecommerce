import { CartItem } from "./cartItem";

export interface Cart {
  id:number;
  grandTotal:number;
  cartItem:CartItem[];
}
