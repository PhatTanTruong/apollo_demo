import { Component, OnInit } from '@angular/core';
import { LineChartDatas } from '../../../../mocks/charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor() {}

  view: any[] = [1200, 400];
  showLegend = true;
  showLabels = true;
  animations = true;
  showXAxis = true;
  showYAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Day';
  yAxisLabel = 'New Case';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  referenceLines = [
    {
      name: 'VietNam',
      value: 4444,
    },
  ];
  data = LineChartDatas;

  ngOnInit(): void {
    setTimeout(() => {
      this.data[1].series[3].value = 14327;
      this.data = [...this.data];
    }, 4000);
  }

  selectHandler(x) {
    console.log(x);
  }

  activateHandler(x) {
    console.log(x.value, x.entries[0]);
  }

  deactivateHandler(x) {
    console.log(x.value, x.entries);
  }
}
