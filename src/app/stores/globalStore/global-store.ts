import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface APIError {
  status: number;
  message: string;
}

export interface GlobalState {
  apiError: APIError;
}

export const initialState = () => ({ apiError: { status: 0, message: '' } });

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'global' })
export class GlobalStore extends Store<GlobalState> {
  constructor() {
    super(initialState());
  }
}
