import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AuthenticationQuery } from '../../stores/authStore/authentication-query';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private authQuery: AuthenticationQuery,
    private router: Router
  ) {
    this.authQuery.loggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/charts']);
      }
    });
  }

  showPassword = false;

  userName = '';
  password = '';

  ngOnInit(): void {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  getInputType() {
    return this.showPassword ? 'text' : 'password';
  }

  loginHandler() {
    this.authService.login(this.userName, this.password);
  }
}
