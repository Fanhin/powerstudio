import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-co2-mini-chart-sensor',
  templateUrl: './co2-mini-chart-sensor.component.html',
  styleUrls: ['./co2-mini-chart-sensor.component.scss'],
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
export class Co2MiniChartSensorComponent implements OnInit {

  @Input() selectionViewType: string = '';
  @Input() componentType: string = '';

  @Input() mockupTempSensorsData: Object = {};

  @Input() sensorCO2DataList: Object = {};

  @Input() weekDay: object = [];
  @Input() chartBGColor: object = [];
  @Input() chartBorderColor: object = [];

  optionsMiniBarChart: object = {};

  constructor() { }

  ngOnInit(): void {
    console.log()
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
