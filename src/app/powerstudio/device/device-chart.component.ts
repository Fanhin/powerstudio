import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-chart',
  templateUrl: './device-chart.component.html',
  styleUrls: ['./device-chart.component.scss']
})
export class DeviceChartComponent implements OnInit {

  // barData: any;
  // chartsOptions: any;
  // chartBGColor: any;
  // chartBorderColor: any;

  constructor() { }

  ngOnInit(): void {

    // this.chartBGColor = [
    //   'rgba(255, 0, 0, 0.4)',
    //   'rgba(255, 127, 14, 0.4)',
    //   'rgba(255, 218, 2, 0.4)',
    //   'rgba(145, 208, 23, 0.4)',
    //   'rgba(0, 153, 0, 0.4)',
    //   'rgba(26, 144, 129, 0.4)',
    //   'rgba(0, 204, 204, 0.4)',
    //   'rgba(0, 128, 255, 0.4)',
    //   'rgba(0, 0, 255, 0.4)',
    //   'rgba(127, 0, 255, 0.4)',
    //   'rgba(255, 0, 255, 0.4)',
    //   'rgba(204, 0, 102, 0.4)',
    //   'rgba(0, 102, 102, 0.4)',
    //   'rgba(51, 0, 102, 0.4)',
    //   'rgba(102, 0, 51, 0.4)',
    //   'rgba(0, 51, 102, 0.4)',
    //   'rgba(32, 32, 32, 0.4)',
    //   'rgba(160, 160, 160, 0.4)',
    // ];

    // this.chartBorderColor = [
    //   'rgba(255, 0, 0, 0.5)',
    //   'rgba(255, 127, 14, 0.5)',
    //   'rgba(255, 218, 2, 0.5)',
    //   'rgba(145, 208, 23, 0.5)',
    //   'rgba(0, 153, 0, 0.5)',
    //   'rgba(26, 144, 129, 0.5)',
    //   'rgba(0, 204, 204, 0.5)',
    //   'rgba(0, 128, 255, 0.5)',
    //   'rgba(0, 0, 255, 0.5)',
    //   'rgba(127, 0, 255, 0.5)',
    //   'rgba(255, 0, 255, 0.5)',
    //   'rgba(204, 0, 102, 0.5)',
    //   'rgba(0, 102, 102, 0.5)',
    //   'rgba(51, 0, 102, 0.5)',
    //   'rgba(102, 0, 51, 0.5)',
    //   'rgba(0, 51, 102, 0.5)',
    //   'rgba(32, 32, 32, 0.5)',
    //   'rgba(160, 160, 160, 0.5)',
    // ];

    // this.barData = {
    //   labels: ['11/10/2021', '10/10/2021', '09/10/2021', '08/10/2021', '07/10/2021', '06/10/2021', '05/10/2021'],
    //   datasets: [
    //     {
    //       label: 'Online',
    //       backgroundColor: this.chartBGColor[4],
    //       borderColor: this.chartBorderColor[4],
    //       data: [46, 32, 51, 76, 48, 54, 51]
    //     }, {
    //       label: 'Offline',
    //       backgroundColor: this.chartBGColor[0],
    //       borderColor: this.chartBorderColor[0],
    //       data: [12, 22, 16, 8, 19, 14, 15]
    //     }, {
    //       label: 'Not Initialized',
    //       backgroundColor: this.chartBGColor[17],
    //       borderColor: this.chartBorderColor[17],
    //       data: [3, 1, 6, 5, 1, 0, 3]
    //     }
    //   ]
    // };

    // this.chartsOptions = {
    //   legend: {
    //     display: true,
    //     labels: {
    //       fontColor: '#A0A7B5'
    //     }
    //   },
    //   responsive: true,
    //   scales: {
    //     yAxes: [{
    //       stacked: true,
    //       ticks: {
    //         fontColor: '#A0A7B5'
    //       },
    //       gridLines: {
    //         color: 'rgba(160, 167, 181, .3)',
    //       }
    //     }],
    //     xAxes: [{
    //       stacked: true,
    //       ticks: {
    //         fontColor: '#A0A7B5'
    //       },
    //       gridLines: {
    //         color: 'rgba(160, 167, 181, .3)',
    //       }
    //     }],
    //   }
    // };


  }

}
