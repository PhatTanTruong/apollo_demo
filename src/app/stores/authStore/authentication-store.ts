import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
  name: string;
  token: string;
}

export const initialAuthState = () =>
  JSON.parse(localStorage.getItem('loggedInfo')) ?? {
    name: '',
    token: '',
  };

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'session' })
export class AuthenticationStore extends Store<AuthState> {
  constructor() {
    super(initialAuthState());
  }
}
