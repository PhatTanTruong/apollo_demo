import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTabsetModule,
} from '@nebular/theme';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    AddNewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
  ],
})
export class ProductModule {}
