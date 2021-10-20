import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  items: NbMenuItem[] = [
    {
      title: 'List',
    },
    {
      title: 'Add new',
    },
  ];

  ngOnInit(): void {}
}
