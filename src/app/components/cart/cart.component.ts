import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ProductModel } from '../../mocks/product';
import { CartQuery } from '../../stores/productsStore/cart-query';
import { CartStore } from '../../stores/productsStore/cart-store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartQuery: CartQuery,
    protected dialogRef: NbDialogRef<any>
  ) {}

  cartList: ProductModel[] = [];
  totalPrice = 0;

  ngOnInit(): void {
    this.cartQuery.cartList$.subscribe((cardList) => {
      this.cartList = cardList;

      this.totalPrice = this.cartList.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
    });
  }

  closeCartHandler() {
    this.dialogRef.close();
  }

  trackByFn(index: number, item: ProductModel) {
    return item.id;
  }
}
