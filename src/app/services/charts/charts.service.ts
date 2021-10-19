import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { chartTypes } from '../../mocks/charts';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor() {}

  getAllChartType() {
    return of(chartTypes).pipe(delay(250));
  }
}
