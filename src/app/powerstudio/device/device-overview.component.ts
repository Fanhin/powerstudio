import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../domain/noti-device';
import { CustomerService } from '../service/device.service';
// import {Product} from '../domain/product';
// import {ProductService} from '../service/productservice';

@Component({
  selector: 'app-device-overview',
  templateUrl: './device-overview.component.html',
  styleUrls: ['./device-overview.component.scss']
})
export class DeviceOverviewComponent implements OnInit {
  chartsOptions2: any;
  pieData: any;

  barData: any;
  chartsOptions: any;
  chartBGColor: any;
  chartBorderColor: any;

  //Data for device component
  onlineDevice:any;
  offlineDevice:any;
  noInitializedDevice:any;

  



  constructor() { }

  ngOnInit(): void {


    this.chartBGColor = [
      'rgb(104 216 170 /80%)',
      'rgb(120 192 230 /80%)',
      'rgb(146 206 127 /80%)',
      'rgb(239 222 141 /80%)',
      'rgb(239 186 141 /80%)',
      'rgb(239 141 141 /80%)',
    ];

    this.chartBorderColor = [
      'rgb(104 216 170)',
      'rgb(120 192 230)',
      'rgb(146 206 127)',
      'rgb(239 222 141)',
      'rgb(239 186 141)',
      'rgb(239 141 141)',
    ];

    this.pieData = {
      labels: ['Online', 'Offline', 'Not Init.'],
      datasets: [
        {
          data: [540, 325, 702],
          hoverBackgroundColor: [this.chartBGColor[2], this.chartBGColor[5], this.chartBGColor[3]],
          backgroundColor: [
            this.chartBGColor[2],
            this.chartBGColor[5],
            this.chartBGColor[3],
          ]
        }]
    };

    this.chartsOptions2 = {
      legend: {
        display: true,
        labels: {
          fontColor: '#A0A7B5'
        }
      },
      responsive: true
    };




    this.barData = {
      labels: ['11/10/2021', '10/10/2021', '09/10/2021', '08/10/2021', '07/10/2021', '06/10/2021', '05/10/2021','04/10/2021'],
      datasets: [
        {
          label: 'Online',
          backgroundColor: this.chartBGColor[2],
          borderColor: this.chartBorderColor[2],
          data: [46, 32, 51, 76, 48, 54, 51,60],
          hoverBackgroundColor: this.chartBGColor[2]
        }, {
          label: 'Offline',
          backgroundColor: this.chartBGColor[5],
          borderColor: this.chartBorderColor[5],
          data: [12, 22, 16, 8, 19, 14, 15,30],
          hoverBackgroundColor:  this.chartBGColor[5]
        }, {
          label: 'Not Initialized',
          backgroundColor: this.chartBGColor[3],
          borderColor: this.chartBorderColor[3],
          hoverBackgroundColor: this.chartBGColor[3],
          data: [3, 1, 6, 5, 1, 0, 3,5]
        }
      ]
    };

    this.chartsOptions = {
      legend: {
        display: true,
        labels: {
          fontColor: '#A0A7B5'
        }
      },
      responsive: true,
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            fontColor: '#A0A7B5'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            fontColor: '#A0A7B5'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
      }
    };

  }

}
