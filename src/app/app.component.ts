import { Component, OnInit } from '@angular/core';
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
    private globalQuery: GlobalQuery
  ) {}
  title = 'demo';

  isLoggedIn = this.authQuery.loggedIn$;
  globalLoading = this.globalQuery.loading$;
  loggedInfo: AuthState;

  ngOnInit(): void {
    this.authQuery.loggedInfo$.subscribe(
      (loggedInfo) => (this.loggedInfo = loggedInfo)
    );
  }

  logoutHandler() {
    this.authService.logout();
  }
}
