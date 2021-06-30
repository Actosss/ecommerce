import { CartItem } from "./cartItem";
import { User } from "./user";

export interface Cart {
  id:number;
  grandTotal:number;
  cartItem:CartItem;
  user:User;
}
