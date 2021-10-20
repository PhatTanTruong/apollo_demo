import { Injectable } from '@angular/core';
import { EntityState, QueryEntity } from '@datorama/akita';
import { ProductModel } from '../../mocks/product';
import { ProductStore } from './products-store';

@Injectable({
  providedIn: 'root',
})
export class ProductQuery extends QueryEntity<
  EntityState<ProductModel, string>
> {
  constructor(protected productStore: ProductStore) {
    super(productStore);
  }

  menuList$ = this.selectAll();
}
