import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AuthenticationStore } from '../../stores/authStore/authentication-store';
import { GlobalStore } from '../../stores/globalStore/global-store';

const validate = (userName: string, password: string) => !!userName && password;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private authStore: AuthenticationStore,
    private globalStore: GlobalStore
  ) {}

  login(name: string, password: string) {
    this.globalStore.setLoading(true);

    of(validate(name, password))
      .pipe(
        map((res) =>
          res
            ? {
                status: 200,
                data: { name, token: `${password}${Math.random()}` },
              }
            : { status: 400, message: 'Login fail' }
        ),
        delay(250)
      )
      .subscribe((response) => {
        if (response.data) {
          this.authStore.update(response.data);
          localStorage.setItem('loggedInfo', JSON.stringify(response.data));
        } else {
          this.authStore.update({ token: '', name: '' });
          localStorage.setItem(
            'loggedInfo',
            JSON.stringify({ token: '', name: '' })
          );
        }
        this.globalStore.setLoading(false);
      });
  }

  async logout() {
    this.globalStore.setLoading(true);
    of({ token: '', name: '' })
      .pipe(delay(350))
      .subscribe((response) => {
        this.authStore.update(response);
        localStorage.setItem('loggedInfo', JSON.stringify(response));
        this.globalStore.setLoading(false);
      });
  }
}
