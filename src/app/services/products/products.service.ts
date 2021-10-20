import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MenuProduct } from '../../mocks/product';
import { GlobalStore } from '../../stores/globalStore/global-store';
import { ProductStore } from '../../stores/productsStore/products-store';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private globalStore: GlobalStore,
    private productStore: ProductStore
  ) {}

  getAllProduct() {
    setTimeout(() => {
      this.globalStore.setLoading(true);
    });
    of(MenuProduct)
      .pipe(delay(250))
      .subscribe((data) => {
        this.productStore.set(data);
        this.globalStore.setLoading(false);
      });
  }
}
