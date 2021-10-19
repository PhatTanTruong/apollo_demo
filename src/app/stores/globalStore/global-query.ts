import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { GlobalStore, GlobalState } from './global-store';

@Injectable({
  providedIn: 'root',
})
export class GlobalQuery extends Query<GlobalState> {
  constructor(protected globalStore: GlobalStore) {
    super(globalStore);
  }

  loading$ = this.selectLoading();
  apiErrorInfo$ = this.select((state) => state.apiError);
}
