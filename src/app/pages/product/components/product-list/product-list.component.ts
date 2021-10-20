import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../../mocks/product';
import { ProductsService } from '../../../../services/products/products.service';
import { ProductQuery } from '../../../../stores/productsStore/products-query';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productQuery: ProductQuery,
    private productService: ProductsService
  ) {}

  menuList: ProductModel[] = [];

  ngOnInit(): void {
    this.productService.getAllProduct();
    this.productQuery.menuList$.subscribe(
      (menuList) => (this.menuList = menuList)
    );
  }

  trackByFn(index: number, item: ProductModel) {
    return item.id;
  }
}
