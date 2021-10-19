import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsService } from '../../services/charts/charts.service';
import { GlobalStore } from '../../stores/globalStore/global-store';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  constructor(
    private chartsService: ChartsService,
    private globalStore: GlobalStore,
    private router: Router
  ) {}

  chartTypeList: any[] = [];

  ngOnInit(): void {
    // this.globalStore.setLoading(true);
    setTimeout(() => this.globalStore.setLoading(true));
    this.chartsService.getAllChartType().subscribe((response) => {
      this.chartTypeList = response;
      this.globalStore.setLoading(false);
    });
  }

  trackByFn(index: number, item: any) {
    return item.key;
  }

  goToDemoHandler(chartKey: string) {
    this.router.navigate([`charts/${chartKey}`]);
  }
}
