import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-walk-detected-compare-zone-chart',
  templateUrl: './walk-detected-compare-zone-chart.component.html',
  styleUrls: ['./walk-detected-compare-zone-chart.component.scss']
})
export class WalkDetectedCompareZoneChartComponent implements OnInit {

  mockupZoneData: any = [];
  chartBGColor1: any;
  dateLists: any;
  selectedZoneViewID: 'a';
  mixDataZone: any;
  optionBarChart: any;

  constructor() { }

  ngOnInit(): void {

    this.dateLists = [
      { date: 'Range Time', code: 1 },
      { date: 'Hours', code: 2 },
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

    // ======= Data From Backend =======
    this.mockupZoneData = [{
      id: 'a',
      name: 'Building Zone A',
      tempSrnsors: [1, 2, 3, 7],
      humiditySensors: [4, 5, 6],
      co2Sensors: [1, 2, 3],
      walkDetectedSensors: [132, 230, 102, 210, 132, 230, 280, 210, 132, 230, 210, 210, 132, 230]
    }, {
      id: 'b',
      name: 'Building Zone B',
      tempSrnsors: [4, 5, 6],
      humiditySensors: [1, 2, 3],
      co2Sensors: [4, 5, 6],
      walkDetectedSensors: [109, 167, 178, 198, 156, 265, 260, 201, 102, 175, 245, 198, 120, 220]
    }, {
      id: 'c',
      name: 'Building Zone C',
      tempSrnsors: [8, 9, 10],
      humiditySensors: [],
      co2Sensors: [],
      walkDetectedSensors: [78, 98, 120, 167, 120, 201, 265, 187, 85, 145, 145, 168, 154, 198]
    }, {
      id: 'd',
      name: 'Building Zone D',
      tempSrnsors: [11, 12],
      humiditySensors: [],
      co2Sensors: [],
      walkDetectedSensors: [120, 220, 145, 189, 145, 187, 245, 167, 95, 125, 175, 165, 178, 214]
    }];

    let data = this.mockupZoneData;
    let datasetsZone = [];
    for (let i = 0; i < data.length; i++) {
      datasetsZone.push({
        label: data[i].name,
        data: data[i].walkDetectedSensors,
        backgroundColor: this.chartBGColor1[i + 4]
      })
    }

    this.mixDataZone = {
      type: 'bar',
      labels: ['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00', '21:00-22:00'],
      datasets: datasetsZone
    }

    this.optionBarChart = {
      type: 'bar',
      legend: {
        display: true,
        responsive: true,
      },
      scales: {
        yAxes: [{
          id: 'left-y-axis',
          type: 'linear',
          position: 'left',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Number [Unit]'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#A0A7B5'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
      }
    }
  }

  getSelectedZone($event: any, zoneID) {
    // console.log($event.target, zoneID);

    if (zoneID != this.selectedZoneViewID) {
      this.selectedZoneViewID = zoneID;
    }
  }

}
