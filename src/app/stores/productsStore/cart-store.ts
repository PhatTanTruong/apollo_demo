import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore, EntityState } from '@datorama/akita';
import { ProductModel } from '../../mocks/product';

export interface CartState extends EntityState<ProductModel, string> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<CartState> {
  constructor() {
    super();
  }
}
