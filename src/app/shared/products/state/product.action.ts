export class GetProducts {
  static readonly type = '[Product] GetProducts';
}
export class AddCartItem {
  static readonly type = '[Product] AddCartItem';
  constructor(public cartId: number, public productId: number) {}
}
