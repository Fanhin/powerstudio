import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-humidity-mini-chart-sensor',
  templateUrl: './humidity-mini-chart-sensor.component.html',
  styleUrls: ['./humidity-mini-chart-sensor.component.scss'],
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
export class HumidityMiniChartSensorComponent implements OnInit {

  @Input() selectionViewType: string = '';
  @Input() componentType: string = '';

  @Input() mockupTempSensorsData: Object = {};

  @Input() sensorHumidityDataList: Object = {};

  @Input() weekDay: object = [];
  @Input() chartBGColor: object = [];
  @Input() chartBorderColor: object = [];

  optionsMiniBarChart: object = {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.sensorHumidityDataList);
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
