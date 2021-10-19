import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthenticationStore, AuthState } from './authentication-store';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationQuery extends Query<AuthState> {
  constructor(protected authStore: AuthenticationStore) {
    super(authStore);
  }

  loggedIn$ = this.select((state) => !!state.token);
  loggedInfo$ = this.select();
}
