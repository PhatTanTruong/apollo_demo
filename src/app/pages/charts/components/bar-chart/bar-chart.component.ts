import { Component, OnInit } from '@angular/core';
import { singleChartData } from '../../../../mocks/charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  view = [1200, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Company';
  showYAxisLabel = true;
  yAxisLabel = 'Price (Milion $)';
  animations = true;

  dataSingle = singleChartData;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  ngOnInit(): void {}

  onSelect(e) {
    console.log(e);
  }
}
