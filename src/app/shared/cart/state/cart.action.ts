export class GetCart {
  static readonly type = '[Cart] Getcart';
  constructor(public payload:number) {}
}
export class GetCartItem {
  static readonly type = '[CartItem] GetcartItem';
  constructor(public payload:number) {}
}
export class LoadCartItems {
  static type = "[Cart] Load Cart Items";
}
export class DeleteCartItem {
  static type = "[CartItem] DeleteCartItem";
  constructor(public cartId: number, public productId: number) {}
}
