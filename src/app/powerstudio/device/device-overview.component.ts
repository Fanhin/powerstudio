import { Component, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/chart';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../domain/noti-device';
import { DeviceService } from '../service/device.service';
// import {Product} from '../domain/product';
// import {ProductService} from '../service/productservice';

@Component({
  selector: 'app-device-overview',
  templateUrl: './device-overview.component.html',
  styleUrls: ['./device-overview.component.scss']
})
export class DeviceOverviewComponent implements OnInit {
  @ViewChild("chartDevicesDoughnutComChart") chartDevicesDoughnutComChart: UIChart;

  chartsOptions2: any;
  pieData: any;

  barData: any;
  chartsOptions: any;
  chartBGColor: any;
  chartBorderColor: any;

  //Data for device component
  devicesDoughnutComChart: any;

  comOnlineDevice: any;
  percentOnlineDevice:any;
  comOfflineDevice: any;
  percentOfflineDevice:any;

  comDevicesHistoryChart:any;
  comDevicesHistoryLabelLast7d:any;
  comDevicesHistory:any;
  



  constructor(private deviceService:DeviceService  ) { }

  ngOnInit(): void {

    this.deviceService.getComOnlineDevice().subscribe(comOnlineDevice => {
      this.percentOnlineDevice = (Number(comOnlineDevice) / 8) * 100
      if (this.comOnlineDevice != comOnlineDevice) {
        this.comOnlineDevice = comOnlineDevice;
        this.devicesDoughnutComChart = {
          labels: ['Online', 'Offline'],
          datasets: [
            {
              data: [this.comOnlineDevice, this.comOfflineDevice],
              backgroundColor: [
                this.chartBGColor[2],
                this.chartBGColor[5]
              ],
              hoverBackgroundColor: [this.chartBGColor[2], this.chartBGColor[5]]
            }]
        };

        this.chartDevicesDoughnutComChart.refresh();


      }


    })
    
    this.deviceService.getComOfflineDevice().subscribe(comOfflineDevice => {
      this.percentOfflineDevice = (Number(comOfflineDevice) / 8) * 100
      if (this.comOfflineDevice != comOfflineDevice) {
        this.comOfflineDevice = comOfflineDevice;
        this.devicesDoughnutComChart = {
          labels: ['Online', 'Offline'],
          datasets: [
            {
              data: [this.comOnlineDevice, this.comOfflineDevice],
              backgroundColor: [
                this.chartBGColor[2],
                this.chartBGColor[5]
              ],
              hoverBackgroundColor: [this.chartBGColor[2], this.chartBGColor[5]]
            }]
        };

        this.chartDevicesDoughnutComChart.refresh();

      }


    })

    this.deviceService.getComDevicesHistory().subscribe(comDevicesHistory => {
      this.comDevicesHistory = comDevicesHistory
    
    })


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

    this.devicesDoughnutComChart = {
      labels: ['Online', 'Offline'],
      datasets: [
        {
          data: [this.comOnlineDevice, this.comOfflineDevice],
          hoverBackgroundColor: [this.chartBGColor[2], this.chartBGColor[5]],
          backgroundColor: [
            this.chartBGColor[2],
            this.chartBGColor[5]
            
          ]
        }]
    };

   
    this.comDevicesHistoryChart = {
      labels: this.comDevicesHistoryLabelLast7d,
      datasets: [
        {
          label: 'Online',
          backgroundColor: this.chartBGColor[2],
          borderColor: this.chartBorderColor[2],
          data: this.comOnlineDevice,
          hoverBackgroundColor: this.chartBGColor[2]
        }, {
          label: 'Offline',
          backgroundColor: this.chartBGColor[5],
          borderColor: this.chartBorderColor[5],
          data: this.comOfflineDevice,
          hoverBackgroundColor:  this.chartBGColor[5]
        }
      ]
    };

  

  }

}
