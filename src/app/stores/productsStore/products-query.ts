import { Injectable } from '@angular/core';
import { EntityState, EntityUIQuery, QueryEntity } from '@datorama/akita';
import { ProductModel } from '../../mocks/product';
import { ProductUIState, ProductStore } from './products-store';

@Injectable({
  providedIn: 'root',
})
export class ProductQuery extends QueryEntity<
  EntityState<ProductModel, string>
> {
  ui: EntityUIQuery<ProductUIState>;
  constructor(protected productStore: ProductStore) {
    super(productStore);
    this.createUIQuery();
  }

  menuList$ = this.selectAll();
  uii$ = () => this.ui.selectAll(); // Without error
  // uii$$ = this.ui.selectAll(); Throw an error

  isItemAddToCart$ = (id: string) => this.ui.selectEntity(id, 'isAddToCard');
}
