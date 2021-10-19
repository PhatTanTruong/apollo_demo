import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartItemComponent } from './components/chart-item/chart-item.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { ChartDemoComponent } from './components/chart-demo/chart-demo.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ChartsComponent,
    ChartItemComponent,
    ChartDemoComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NgxChartsModule,
  ],
})
export class ChartsModule {}
