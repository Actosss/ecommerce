export class GetCart {
  static readonly type = '[Cart] Getcart';
  constructor(public payload:number) {}
}
export class GetCartItem {
  static readonly type = '[CartItem] GetcartItem';
  constructor(public payload:number) {}
}
