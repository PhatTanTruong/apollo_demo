import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface GlobalState {}

export const initialState = () => ({});

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'global' })
export class GlobalStore extends Store<GlobalState> {
  constructor() {
    super(initialState());
  }
}
