import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-visitor-inout-chart',
  templateUrl: './visitor-inout-chart.component.html',
  styleUrls: ['./visitor-inout-chart.component.scss']
})
export class VisitorInoutChartComponent implements OnInit {

  dateLists: any;
  mixDataZone: any;
  optionMixChart: any;
  chartBGColor1: any;

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

    let countIn = [224, 345, 498, 901, 1348, 698, 425, 801, 970, 1106, 1120, 901, 789, 312];
    let countOut = [102, 237, 201, 678, 890, 1100, 578, 641, 587, 891, 1247, 1450, 1019, 780];
    let insideNow = 0;
    let countInside = [];

    for (let i = 0; i < countIn.length; i++) {
      insideNow += countIn[i] - countOut[i];
      countInside.push(insideNow);
    }

    this.mixDataZone = {
      type: 'bar',
      labels: ['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00', '21:00-22:00'],
      datasets: [{
        label: 'Count In',
        data: countIn,
        backgroundColor: 'rgba(204, 0, 102, 0.4)'
      }, {
        label: 'Count Out',
        data: countOut,
        backgroundColor: 'rgba(0, 128, 255, 0.4)'
      }, {
        type: 'line',
        label: 'Inside',
        data: countInside,
        backgroundColor: 'rgba(255, 0, 0, 0.4)',
        borderColor: 'rgba(255, 0, 0, 0.4)',
        fill: false,
        lineTension: 0
      }]
    }

    this.optionMixChart = {
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
            labelString: 'Number of customer [Unit]'
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

}
