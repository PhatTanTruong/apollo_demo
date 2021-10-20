import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AuthenticationQuery } from '../../stores/authStore/authentication-query';
import { AuthState } from '../../stores/authStore/authentication-store';
import { CartQuery } from '../../stores/productsStore/cart-query';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private authQuery: AuthenticationQuery,
    private router: Router,
    private cartQuery: CartQuery,
    private dialogService: NbDialogService
  ) {}

  loggedInfo: AuthState;
  isInChartsPage = true;
  isInProductsPage = false;
  cartAmount = 0;

  ngOnInit(): void {
    this.authQuery.loggedInfo$.subscribe(
      (loggedInfo) => (this.loggedInfo = loggedInfo)
    );

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e: NavigationEnd) => e.url)
      )
      .subscribe((url: string) => {
        this.isInChartsPage = url === '/charts';
        this.isInProductsPage = url === '/product';
      });

    this.cartQuery.cartList$.subscribe(
      ({ length }) => (this.cartAmount = length)
    );
  }

  logoutHandler() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  openCart() {
    this.dialogService.open(CartComponent);
  }
}
