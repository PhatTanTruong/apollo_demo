import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbSpinnerModule,
  NbToastrModule,
  NbIconModule,
  NbDialogModule,
  NbCardModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CartComponent, CartItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    NbSpinnerModule,
    NbButtonModule,
    NbToastrModule.forRoot({ duration: 3000 }),
    NbIconModule,
    NbDialogModule.forRoot({ closeOnBackdropClick: false, closeOnEsc: true }),
    NbCardModule,
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
