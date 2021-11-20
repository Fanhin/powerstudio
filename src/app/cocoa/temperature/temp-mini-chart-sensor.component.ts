import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-temp-mini-chart-sensor',
  templateUrl: './temp-mini-chart-sensor.component.html',
  styleUrls: ['./temp-mini-chart-sensor.component.scss'],
  animations: [
    trigger('animation', [
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({ transform: 'translateY(50%)', opacity: 0 }),
        animate('200ms ease-out')
      ]),
      transition('* => void', [
        animate(('200ms ease-in'), style({
          height: 0,
          opacity: 0,
          transform: 'translateY(50%)'
        }))
      ])
    ])
  ]
})
export class TempMiniChartSensorComponent implements OnInit {

  @Input() selectionViewType: string = '';
  @Input() componentType: string = '';

  @Input() mockupTempSensorsData: Object = {};

  @Input() sensorTempDataList: Object = {};

  @Input() weekDay: object = [];
  @Input() chartBGColor: object = [];
  @Input() chartBorderColor: object = [];

  optionsMiniBarChart: object = {};

  constructor() { }

  ngOnInit(): void {

    console.log(this.sensorTempDataList)

    // ============== Chart Oprtions ===================
    this.optionsMiniBarChart = {
      type: 'bar',
      legend: {
        display: false,
      },
      responsive: true,
      scales: {
        yAxes: [{
          id: 'left-y-axis',
          display: false,
        }],
        xAxes: [{
          display: false,
        }],
      }
    };
  }

}
