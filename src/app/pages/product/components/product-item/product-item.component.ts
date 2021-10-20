import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductModel } from '../../../../mocks/product';
import { CartStore } from '../../../../stores/productsStore/cart-store';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnChanges {
  @Input() item: ProductModel;
  constructor(private cartStore: CartStore) {}

  itemAmount = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item.currentValue !== changes.item.previousValue) {
      this.itemAmount = this.item.amount;
    }
  }

  ngOnInit(): void {}

  addToCartHandler() {
    this.cartStore.upsert(this.item.id, (oldState: any) => {
      console.log(oldState);
      if (oldState.id) {
        return {
          ...oldState,
          amount: oldState.amount + this.itemAmount,
        };
      } else {
        return this.item;
      }
    });
  }
}
