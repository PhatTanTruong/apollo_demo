import { Injectable } from '@angular/core';
import {
  StoreConfig,
  EntityStore,
  EntityState,
  EntityUIStore,
} from '@datorama/akita';
import { ProductModel } from '../../mocks/product';

export type ProductUI = {
  isAddToCard: boolean;
};

export interface ProductUIState extends EntityState<ProductUI> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'product' })
export class ProductStore extends EntityStore<
  EntityState<ProductModel, string>
> {
  ui: EntityUIStore<ProductUIState>;

  constructor() {
    super();
    const initUIState = { isAddToCard: false };
    this.createUIStore().setInitialEntityState(initUIState);
  }

  akitaPreAddEntity(newEntity: any) {
    console.log('In PreAdd ', newEntity);
    return newEntity;
  }
}
