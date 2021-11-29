import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { OverviewService } from '../service/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  chartBGColor: any;
  chartBorderColor: any;

  barAlarmAllData: any;
  barAlarmAllOption: any;

  barPowerUseTodayChart: any;
  barPowerUseTodayOption: any;

  lineProgressiveData: any;
  lineChartsOptions: any;
  //////////////////////////
  alarmEvent:any;
  clearEvent:any;
  costToday:any;
  saveCostToday:any;
  allEnergy:any;
  comOnlineDevice:any;
  comOfflineDevice:any;
  comNonInitDevice:any;
  pieComDataChart: any;
  pieComDataChartsOptions: any;

  allPowerDataChart:any;
  powerCompareDataChart:any;

  powerUsageToday=[];
  powerUsageYesterday = [];
  
  allEnergyDataChart:any;




  constructor(
    private breadcrumbService: AppBreadcrumbService,
    private overviewService: OverviewService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Overview', routerLink: ['/'] }
    ]);
  }


  ngOnInit(): void {

    this.overviewService.getAlarmEvent().subscribe(alarmEvent =>{
      this.alarmEvent = alarmEvent;
    })

    this.overviewService.getClearEvent().subscribe(clearEvent =>{
      this.clearEvent = clearEvent;
    })

    this.overviewService.getCostToday().subscribe(costToday =>{
      this.costToday = costToday;
    })

    this.overviewService.getSaveCostToday().subscribe(saveCostToday =>{
      this.saveCostToday = saveCostToday;
    })

    this.overviewService.getAllEnergy().subscribe(allEnergy =>{
      this.allEnergy = allEnergy;
    })

    this.overviewService.getComOnlineDevice().subscribe(comOnlineDevice =>{
      this.comOnlineDevice = comOnlineDevice;
    })
    this.overviewService.getComOfflineDevice().subscribe(comOfflineDevice =>{
      this.comOfflineDevice = comOfflineDevice;
    })
    this.overviewService.getComNonInitDevice().subscribe(comNonInitDevice =>{
      this.comNonInitDevice = comNonInitDevice;
    })
    



    this.chartBGColor = [
      'rgb(104 216 170 /80%)',
      'rgb(120 192 230 /80%)',
      'rgb(146 206 127 /80%)',
      'rgb(239 222 141 /80%)',
      'rgb(239 186 141 /80%)',
      'rgb(239 141 141 /80%)',
      'rgb(156 141 239 /80%)',
      'rgb(255 169 221 /80%)',
      'rgb(247 153 166 /80%)',
    ];

    this.chartBorderColor = [
      'rgb(104 216 170)',
      'rgb(120 192 230)',
      'rgb(146 206 127)',
      'rgb(239 222 141)',
      'rgb(239 186 141)',
      'rgb(239 141 141)',
      'rgb(156 141 239)',
      'rgb(255 169 221)',
      'rgb(247 153 166)',
    ];


    this.pieComDataChart = {
      labels: ['Online', 'Offline', 'Not Init.'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            this.chartBGColor[2],
            this.chartBGColor[5],
            this.chartBGColor[3],
          ],
          hoverBackgroundColor: [this.chartBGColor[2], this.chartBGColor[5], this.chartBGColor[3]]
        }]
    };

    this.pieComDataChartsOptions = {
      legend: {
        display: true,
        labels: {
          fontColor: '#A0A7B5'
        }
        
      },
      responsive: true
    };

    this.allPowerDataChart = {
      labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
      datasets: [
        {
          label: 'Panel01',
          backgroundColor: this.chartBGColor[0],
          borderColor: this.chartBorderColor[0],
          hoverBackgroundColor: this.chartBGColor[0],
          data: [12, 34, 30, 45, 56, 68, 51]
        }
      ]
    };

    this.allEnergyDataChart = {
      labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
      datasets: [
        {
          label: 'Panel01',
          backgroundColor: this.chartBGColor[0],
          borderColor: this.chartBorderColor[0],
          hoverBackgroundColor: this.chartBGColor[0],
          data: [12, 34, 30, 45, 56, 68, 51]
        }
      ]
    };


    const data = [];
    const data2 = [];

    let prev = 100;
    let prev2 = 80;
    for (let i = 0; i < 200; i++) {
      prev += 5 - Math.random() * 10;
      data.push({ x: i, y: prev });
      prev2 += 5 - Math.random() * 10;
      data2.push({ x: i, y: prev2 });
    }

    this.powerCompareDataChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Power Usage Today',
          data: data,
          fill: false,
          radius: 0,
          lineTension: 0,
          backgroundColor: this.chartBorderColor[1],
          borderColor: this.chartBorderColor[1],
          
        },
        {
          label: 'Power Usage Yesterday',
          data: data2,
          fill: false,
          radius: 0,
          lineTension: 0.2,
          backgroundColor: this.chartBorderColor[8],
          borderColor: this.chartBorderColor[8]
        }
      ]
    }

    this.lineChartsOptions = {
      legend: {
        display: true,
        labels: {
          fontColor: '#A0A7B5'
        }
      },
      responsive: true,
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Voltage Usage [kW]'
          },
          ticks: {
            beginAtZero: true,
            fontColor: '#A0A7B5'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
        xAxes: [{
          //////////////////////////////// For Progressive Chart type: 'linear', ////////////////////////////////
          type: 'linear',
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
