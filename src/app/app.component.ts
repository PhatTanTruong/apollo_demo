import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticationQuery } from './stores/authStore/authentication-query';
import { AuthState } from './stores/authStore/authentication-store';
import { GlobalQuery } from './stores/globalStore/global-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private authQuery: AuthenticationQuery,
    private globalQuery: GlobalQuery,
    private router: Router,
    private toastr: NbToastrService
  ) {}
  title = 'demo';

  isLoggedIn = this.authQuery.loggedIn$;
  globalLoading = this.globalQuery.loading$;
  loggedInfo: AuthState;
  isInDemoPage = false;

  ngOnInit(): void {
    this.authQuery.loggedInfo$.subscribe(
      (loggedInfo) => (this.loggedInfo = loggedInfo)
    );

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e: NavigationEnd) => e.url)
      )
      .subscribe(
        (url: string) => (this.isInDemoPage = url.includes('/charts/'))
      );

    this.globalQuery.apiErrorInfo$.subscribe((error) => {
      if (error.message) {
        this.toastr.danger(error.message, 'Fail');
      }
    });
  }

  logoutHandler() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  backToListHandler() {
    this.router.navigate(['charts']);
  }
}
