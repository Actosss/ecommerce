import { CartItem } from "./cartItem";
import { User } from "./user";

export class Cart {
  id!:number;
  grandTotal!:number;
  cartItem!:CartItem[];
  user!:User;
}
