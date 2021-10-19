import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { ChartDemoComponent } from './components/chart-demo/chart-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
  },
  {
    path: ':key',
    component: ChartDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
