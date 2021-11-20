import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-visitor-in-chart',
  templateUrl: './visitor-in-chart.component.html',
  styleUrls: ['./visitor-in-chart.component.scss']
})
export class VisitorInChartComponent implements OnInit {

  dateLists: any;
  visitorInData: any;
  optionVisitorBarChart: any;

  constructor() { }

  ngOnInit(): void {

    this.dateLists = [
      { date: 'Range Time', code: 1 },
      // { date: 'Hours', code: 2 },
      // { date: 'Days', code: 3 },
      { date: 'Weeks', code: 4 },
      { date: 'Month', code: 5 },
      { date: 'Years', code: 6 }
    ];

    let countIn = [1106, 1026, 978, 1109, 1247, 1540, 1378];

    this.visitorInData = {
      type: 'bar',
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Count In',
        data: countIn,
        backgroundColor: 'rgba(0, 128, 255, 0.4)'
      }]
    }

    this.optionVisitorBarChart = {
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
            labelString: 'Number of passed In sensor [Unit]'
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
