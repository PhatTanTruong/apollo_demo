import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore, EntityState } from '@datorama/akita';
import { ProductModel } from '../../mocks/product';

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'product' })
export class ProductStore extends EntityStore<
  EntityState<ProductModel, string>
> {
  constructor() {
    super();
  }
}
