import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrls: ['./chart-item.component.scss'],
})
export class ChartItemComponent implements OnInit {
  constructor() {}

  @Input() item: any;

  @Output() clickDetail = new EventEmitter<any>();

  ngOnInit(): void {}

  goToDemoHandler() {
    this.clickDetail.emit();
  }
}
