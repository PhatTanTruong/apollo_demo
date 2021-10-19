import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartItemComponent } from './components/chart-item/chart-item.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { ChartDemoComponent } from './components/chart-demo/chart-demo.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    ChartsComponent,
    ChartItemComponent,
    ChartDemoComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxChartsModule,
  ],
})
export class ChartsModule {}
