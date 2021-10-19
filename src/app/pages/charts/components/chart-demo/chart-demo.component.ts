import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.scss'],
})
export class ChartDemoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  chartKey = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.chartKey = params.key;
    });
  }
}
