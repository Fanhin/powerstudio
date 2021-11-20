import { Component, OnInit } from '@angular/core';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-mockup-mini-chart',
  templateUrl: './mockup-mini-chart.component.html',
  styleUrls: ['./mockup-mini-chart.component.scss']
})
export class MockupMiniChartComponent implements OnInit {

  mockupDatas: any[];
  chartBGColor: any;
  chartBorderColor: any;
  optionsMiniBarChart: object = {};

  value: number = 89;

  constructor() { }

  ngOnInit(): void {

    this.chartBGColor = [
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

    this.chartBorderColor = [
      'rgba(255, 0, 0, 0.5)',
      'rgba(255, 127, 14, 0.5)',
      'rgba(255, 218, 2, 0.5)',
      'rgba(145, 208, 23, 0.5)',
      'rgba(0, 153, 0, 0.5)',
      'rgba(26, 144, 129, 0.5)',
      'rgba(0, 204, 204, 0.5)',
      'rgba(0, 128, 255, 0.5)',
      'rgba(0, 0, 255, 0.5)',
      'rgba(127, 0, 255, 0.5)',
      'rgba(255, 0, 255, 0.5)',
      'rgba(204, 0, 102, 0.5)',
      'rgba(0, 102, 102, 0.5)',
      'rgba(51, 0, 102, 0.5)',
      'rgba(102, 0, 51, 0.5)',
      'rgba(0, 51, 102, 0.5)',
      'rgba(32, 32, 32, 0.5)',
      'rgba(160, 160, 160, 0.5)',
    ];

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

    this.mockupDatas = [{
      id: 1,
      name: 'Temp. Sensor 01',
      type: 'temp',
      zoneID: 'a',
      chartData: {
        datasets: [{
          backgroundColor: this.chartBGColor[7],
          borderColor: this.chartBorderColor[7],
          data: [23.5, 24.8, 25.2, 23.1, 22.2, 23.7, 22.9],
          fill: false,
          label: "Temp. Sensor 01 [°C]",
          tension: 0,
          yAxisID: "left-y-axis"
        }],
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturdays", "Sunday"]
      },
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 1,
      humidityID: 4,
      co2ID: 1,
      backgroundColor: this.chartBGColor[0],
      borderColor: this.chartBorderColor[0],
      dataCurrent: 23.5,
      data: [23.5, 24.8, 25.2, 23.1, 22.2, 23.7, 22.9],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 01',
      co2Name: 'CO\u2082 Sensor 01',
      humidityName: 'Humidity Sensor 04',
    }, {
      id: 4,
      name: 'Humidity Sensor 04',
      type: 'humidity',
      zoneID: 'a',
      chartData: {
        datasets: [{
          backgroundColor: this.chartBGColor[6],
          borderColor: this.chartBorderColor[6],
          data: [54, 59, 56, 51, 48, 42, 45],
          fill: false,
          label: "Temp. Sensor 01 [°C]",
          tension: 0,
          yAxisID: "left-y-axis"
        }],
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturdays", "Sunday"]
      },
      chartMiniShow: true,
      chartShow: false,
      check: [1],
      tempID: 1,
      humidityID: 4,
      co2ID: 1,
      backgroundColor: this.chartBGColor[15],
      borderColor: this.chartBorderColor[15],
      dataCurrent: 54,
      data: [54, 59, 56, 51, 48, 42, 45],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 01',
      co2Name: 'CO\u2082 Sensor 01',
      humidityName: 'Humidity Sensor 04',
    }, {
      name: 'Trash Sensor 01',
      type: 'trash',
      dataCurrent: 89,
      zoneName: 'Building Zone A',
    }]
  }

}
