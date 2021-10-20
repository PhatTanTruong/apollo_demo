import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../mocks/product';
import { CartStore } from '../../stores/productsStore/cart-store';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: ProductModel;
  constructor(private cartStore: CartStore) {}

  ngOnInit(): void {}

  updateAmountHandler(amount: number) {
    if (this.item.amount + amount > 0) {
      this.cartStore.update(this.item.id, (oldState) => ({
        ...oldState,
        amount: this.item.amount + amount,
      }));
    } else {
      this.cartStore.remove(this.item.id);
    }
  }
}
