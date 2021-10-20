import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../../mocks/product';
import { ProductStore } from '../../../../stores/productsStore/products-store';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  constructor(private productStore: ProductStore) {}

  newItem: ProductModel = {
    id: '',
    amount: 1,
    description: '',
    name: '',
    price: 0,
  };

  ngOnInit(): void {}

  addItemHandler() {
    this.newItem.id = `p${Math.random()}`;

    this.productStore.add(this.newItem);
  }

  buttonDisable() {
    return (
      !this.newItem.description || !this.newItem.name || !this.newItem.price
    );
  }
}
