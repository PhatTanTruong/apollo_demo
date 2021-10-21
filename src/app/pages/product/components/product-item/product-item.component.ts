import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductModel } from '../../../../mocks/product';
import { CartStore } from '../../../../stores/productsStore/cart-store';
import { ProductQuery } from '../../../../stores/productsStore/products-query';
import { ProductStore } from '../../../../stores/productsStore/products-store';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnChanges {
  @Input() item: ProductModel;
  constructor(
    private cartStore: CartStore,
    private productStore: ProductStore,
    private productQuery: ProductQuery
  ) {}

  itemAmount = 0;
  isAdded = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item.currentValue !== changes.item.previousValue) {
      this.itemAmount = this.item.amount;
    }
  }

  ngOnInit(): void {
    this.productQuery
      .isItemAddToCart$(this.item.id)
      .subscribe((isAddToCart) => (this.isAdded = isAddToCart));
  }

  addToCartHandler() {
    this.cartStore.upsert(this.item.id, (oldState: any) => {
      if (oldState.id) {
        return {
          ...oldState,
          amount: oldState.amount + this.itemAmount,
        };
      } else {
        return this.item;
      }
    });

    this.productStore.ui.update(this.item.id, { isAddToCard: true });
  }
}
