import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: '.app-walk-detected-chart',
  templateUrl: './walk-detected-chart.component.html',
  styleUrls: ['./walk-detected-chart.component.scss'],
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
export class WalkDetectedChartComponent implements OnInit {

  dateLists: any;
  mockupZoneData: any = [];
  pieDataZone: any;
  optionPieChart: any;
  chartBGColor1: any;
  chartBGColor2: any;
  chartBGColor3: any;
  chartBGColor4: any;

  selectedZoneViewID: string = 'a';

  constructor() { }

  ngOnInit(): void {

    this.dateLists = [
      { date: 'Range Time', code: 1 },
      // { date: 'Hours', code: 2 },
      { date: 'Days', code: 3 },
      { date: 'Weeks', code: 4 },
      { date: 'Month', code: 5 },
      { date: 'Years', code: 6 }
    ];


    this.chartBGColor1 = [
      'rgba(255, 0, 0, 0.4)',
      'rgba(255, 127, 14, 0.4)',
      'rgba(255, 218, 2, 0.4)',
      'rgba(145, 208, 23, 0.4)',
      'rgba(0, 153, 0, 0.4)',
      'rgba(26, 144, 129, 0.4)',
      'rgba(0, 204, 204, 0.4)',
      'rgba(0, 128, 255, 0.4)',
      'rgba(0, 0, 255, 0.4)',
      'rgba(127, 0, 255, 0.4)',
      'rgba(255, 0, 255, 0.4)',
      'rgba(204, 0, 102, 0.4)',
      'rgba(0, 102, 102, 0.4)',
      'rgba(51, 0, 102, 0.4)',
      'rgba(102, 0, 51, 0.4)',
      'rgba(0, 51, 102, 0.4)',
      'rgba(32, 32, 32, 0.4)',
      'rgba(160, 160, 160, 0.4)',
    ];

    this.chartBGColor2 = [
      'rgba(0, 153, 0, 0.4)',
      'rgba(26, 144, 129, 0.4)',
      'rgba(0, 204, 204, 0.4)',
      'rgba(0, 128, 255, 0.4)'
    ];

    this.chartBGColor3 = [
      'rgba(0, 0, 255, 0.4)',
      'rgba(127, 0, 255, 0.4)',
      'rgba(255, 0, 255, 0.4)',
      'rgba(204, 0, 102, 0.4)',
    ];

    this.chartBGColor4 = [
      'rgba(0, 102, 102, 0.4)',
      'rgba(51, 0, 102, 0.4)',
      'rgba(102, 0, 51, 0.4)',
      'rgba(0, 51, 102, 0.4)',
    ];

    // ======= Data From Backend =======
    this.mockupZoneData = [{
      id: 'a',
      name: 'Building Zone A',
      tempSrnsors: [1, 2, 3, 7],
      humiditySensors: [4, 5, 6],
      co2Sensors: [1, 2, 3],
      walkDetectedSensors: [540, 325, 702, 421]
    }, {
      id: 'b',
      name: 'Building Zone B',
      tempSrnsors: [4, 5, 6],
      humiditySensors: [1, 2, 3],
      co2Sensors: [4, 5, 6],
      walkDetectedSensors: [210, 458, 102]
    }, {
      id: 'c',
      name: 'Building Zone C',
      tempSrnsors: [8, 9, 10],
      humiditySensors: [],
      co2Sensors: [],
      walkDetectedSensors: [89, 184, 345, 120]
    }, {
      id: 'd',
      name: 'Building Zone D',
      tempSrnsors: [11, 12],
      humiditySensors: [],
      co2Sensors: [],
      walkDetectedSensors: [78, 141]
    }]

    this.pieDataZone = [{
      type: 'pie',
      labels: ['A1', 'A2', 'A3', 'A4'],
      datasets: [
        {
          data: this.mockupZoneData[0].walkDetectedSensors,
          backgroundColor: this.chartBGColor1
        }]
    }, {
      type: 'pie',
      labels: ['B1', 'B2', 'B3'],
      datasets: [
        {
          data: this.mockupZoneData[1].walkDetectedSensors,
          backgroundColor: this.chartBGColor2
        }]
    }, {
      type: 'pie',
      labels: ['C1', 'C2', 'C3', 'C4'],
      datasets: [
        {
          data: this.mockupZoneData[2].walkDetectedSensors,
          backgroundColor: this.chartBGColor3
        }]
    }, {
      type: 'pie',
      labels: ['D1', 'D2'],
      datasets: [
        {
          data: this.mockupZoneData[3].walkDetectedSensors,
          backgroundColor: this.chartBGColor4
        }]
    }];

    this.optionPieChart = [{
      legend: {
        display: true,
        labels: {
          fontColor: '#515C66'
        }
      },
      responsive: true,
      title: {
        display: true,
        text: 'Building Zone A',
        position: 'bottom'
      },
      aspectRatio: 1
    }, {
      legend: {
        display: true,
        labels: {
          fontColor: '#515C66'
        }
      },
      responsive: true,
      title: {
        display: true,
        text: 'Building Zone B',
        position: 'bottom'
      },
      aspectRatio: 1
    }, {
      legend: {
        display: true,
        labels: {
          fontColor: '#515C66'
        }
      },
      responsive: true,
      title: {
        display: true,
        text: 'Building Zone C',
        position: 'bottom'
      },
      aspectRatio: 1
    }, {
      legend: {
        display: true,
        labels: {
          fontColor: '#515C66'
        }
      },
      responsive: true,
      title: {
        display: true,
        text: 'Building Zone D',
        position: 'bottom'
      },
      aspectRatio: 1
    }];


  }

  getSelectedZone($event: any, zoneID) {
    // console.log($event.target, zoneID);

    if (zoneID != this.selectedZoneViewID) {
      this.selectedZoneViewID = zoneID;
    }
  }

}
