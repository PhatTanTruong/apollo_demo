import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticationQuery } from './stores/authStore/authentication-query';
import { GlobalQuery } from './stores/globalStore/global-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authQuery: AuthenticationQuery,
    private globalQuery: GlobalQuery,
    private toastr: NbToastrService
  ) {}
  title = 'demo';

  isLoggedIn = this.authQuery.loggedIn$;
  globalLoading = this.globalQuery.loading$;

  ngOnInit(): void {
    this.globalQuery.apiErrorInfo$.subscribe((error) => {
      if (error.message) {
        this.toastr.danger(error.message, 'Fail');
      }
    });
  }
}
