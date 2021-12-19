import { Component, OnInit, ViewChild, } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { OverviewService } from '../service/overview.service';
import { UIChart } from "primeng/chart";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],

})




export class OverviewComponent implements OnInit {
  @ViewChild("chartDevicesDoughnutComChart") chartDevicesDoughnutComChart: UIChart;

  @ViewChild("chartpowerMaxAllTodayChart") chartpowerMaxAllTodayChart: UIChart;
  @ViewChild("chartPowerCompareChart") chartPowerCompareChart: UIChart;
  @ViewChild("chartEnergyUsageAllTodayChart") chartEnergyUsageAllTodayChart: UIChart;




  chartBGColor: any;
  chartBorderColor: any;

  barAlarmAllData: any;
  barAlarmAllOption: any;

  barPowerUseTodayChart: any;
  barPowerUseTodayOption: any;

  lineProgressiveData: any;
  lineChartsOptions: any;

  //data
  onPeak: any;
  offPeak: any;
  costToday: any;
  saveCostToday: any;
  allEnergy: any;
  pea1: any;
  pea2: any;
  pea3: any;
  pea4: any;
  pea5: any;
  solar1: any;
  solar2: any;
  solar3: any;
  comOnlineDevice: any;
  percentOnlineDevice: any;
  comOfflineDevice: any;
  percentOfflineDevice: any;

  alarmEvent: any;
  clearEvent: any;
  temp: any;
  hum: any;
  smokeStatus: any;


  //chart
  devicesDoughnutComChart: any;
  devicesDoughnutComChartOptions: any;

  powerMaxAllTodayChart: any;
  powerMaxAllTodayChartOption: any;

  powerCompareChart: any;
  powerCompareChartOption: any;

  energyUsageAllTodayChart: any;
  energyUsageAllChartOption: any;

  //graph data
  allPowerMAX24hr: any[];
  powerUsageToday24hr: any[];
  powerUsageYesterday24hr: any[];
  energyDelta24hr: any[];


  tmpDataChart: any[];

  lable24hr: any[] = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']

  constructor(
    private breadcrumbService: AppBreadcrumbService,
    private overviewService: OverviewService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Overview', routerLink: ['/'] }
    ]);
  }



  ngOnInit(): void {


    //this.allPowerMAX24hr = this.formatData(this.tmpDataChart);

    //data info websocket
    this.overviewService.getOnPeak().subscribe(onPeak => {
      this.onPeak = onPeak;
    })

    this.overviewService.getOffPeak().subscribe(offPeak => {
      this.offPeak = offPeak;
    })

    this.overviewService.getCostToday().subscribe(costToday => {
      this.costToday = costToday;
    })

    this.overviewService.getSaveCostToday().subscribe(saveCostToday => {
      this.saveCostToday = saveCostToday;
    })

    this.overviewService.getAllEnergy().subscribe(allEnergy => {
     
      this.allEnergy = allEnergy;
      
      
    })

    this.overviewService.getPEAAlldevice().subscribe((pea: any) => {
      pea.forEach(element => {
        switch (element._id) {
          case "MDB1":
            this.pea1 = element.energy.toFixed(2);
            break;
          case "MDB2":
            this.pea2 = element.energy.toFixed(2);
            break;
          case "B1":
            this.pea3 = element.energy.toFixed(2);
            break;
          case "MDB4":
            this.pea4 = element.energy.toFixed(2);
            break;
          case "MDB5":
            this.pea5 = element.energy.toFixed(2);
            break;
          default:
            break;
        }
      });

    })

    // this.overviewService.getPEA1().subscribe(pea2=>{
    //   this.pea2 = pea2[1].energy.toFixed( 3 );
    // })

    // this.overviewService.getPEA1().subscribe(pea3=>{
    //   this.pea3 =pea3[2].energy.toFixed( 3 );
    // })

    // this.overviewService.getPEA1().subscribe(pea4=>{
    //   this.pea4 =pea4[3].energy.toFixed( 3 );
    // })

    // this.overviewService.getPEA1().subscribe(pea5=>{
    //   this.pea5 =pea5[1].energy.toFixed( 3 );
    // })

    this.overviewService.getSolarAlldevice().subscribe(solar => {
      this.solar1 = solar[0].energy.toFixed(2);
      this.solar2 = solar[1].energy.toFixed(2);
      this.solar3 = solar[2].energy.toFixed(2);

    })

    // this.overviewService.getSolar2().subscribe(solar2=>{
    //   this.solar2 = solar2[1].energy.toFixed( 3 );
    // })

    // this.overviewService.getSolar3().subscribe(solar3=>{
    //   this.solar3 = solar3[2].energy.toFixed( 3 );
    // })

    this.overviewService.getComOnlineDevice().subscribe(comOnlineDevice => {
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
    this.overviewService.getComOfflineDevice().subscribe(comOfflineDevice => {
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
    this.overviewService.getAlarmEvent().subscribe(alarmEvent => {
      this.alarmEvent = alarmEvent;
    })

    this.overviewService.getClearEvent().subscribe(clearEvent => {
      this.clearEvent = clearEvent;
    })


    //graph rest

    this.overviewService.getAllPowerMAX24hr().then(data => {
    
      this.allPowerMAX24hr = data.map(a => a.power);
      
      
    
      this.powerMaxAllTodayChart = {
        labels: this.lable24hr,
        datasets: [
          {
            data: this.allPowerMAX24hr,
            label: 'Power',
            backgroundColor: '#B983FF',
            hoverBackgroundColor: '#94B3FD'
          }
        ]
      }

      this.chartpowerMaxAllTodayChart.refresh();


    });

    this.overviewService.getPowerUsageToday24hr().then(data => {
      this.powerUsageToday24hr = data.map(a => a.power);
     

      this.powerCompareChart = {
        labels: this.lable24hr,
        datasets: [
          {
            label: 'Power Usage Today',
            data: this.powerUsageToday24hr,
            fill: false,
            radius: 0,
            lineTension: 0,
            backgroundColor: this.chartBorderColor[1],
            borderColor: this.chartBorderColor[1],

          },
          {
            label: 'Power Usage Yesterday',
            data: this.powerUsageYesterday24hr,
            fill: false,
            radius: 0,
            lineTension: 0.2,
            backgroundColor: this.chartBorderColor[8],
            borderColor: this.chartBorderColor[8]
          }
        ]
      }

      this.chartPowerCompareChart.refresh();
    })

    this.overviewService.getPowerUsageYesterday24hr().then(data => {
      this.powerUsageYesterday24hr = data.map(a => a.power);
     

      this.powerCompareChart = {
        labels: this.lable24hr,
        datasets: [
          {
            label: 'Power Usage Today',
            data: this.powerUsageToday24hr,
            fill: false,
            radius: 0,
            lineTension: 0,
            backgroundColor: this.chartBorderColor[1],
            borderColor: this.chartBorderColor[1],

          },
          {
            label: 'Power Usage Yesterday',
            data: this.powerUsageYesterday24hr,
            fill: false,
            radius: 0,
            lineTension: 0.2,
            backgroundColor: this.chartBorderColor[8],
            borderColor: this.chartBorderColor[8]
          }
        ]
      }

      this.chartPowerCompareChart.refresh();
    })

    this.overviewService.getEnergyDelta24hr().then(data => {

      this.energyDelta24hr = data.map(a => Math.abs(a.energy));
     

      this.energyUsageAllTodayChart = {
        labels: this.lable24hr,
        datasets: [
          {
            label: 'Energy',
            backgroundColor: '#89B5AF',
            hoverBackgroundColor: '#94B3FD',
            data: this.energyDelta24hr
          }
        ]
      };

      this.chartEnergyUsageAllTodayChart.refresh();
    })

    this.overviewService.getTempEvent().subscribe(data => {
      this.temp = data;
    })
    this.overviewService.getHumEvent().subscribe(data => {
      this.hum = data;
    })
    this.overviewService.getSmokeEvent().subscribe(data => {
      this.smokeStatus = data;
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

    //start all chart


    this.devicesDoughnutComChartOptions = {
      legend: {
        display: true,
        labels: {
          fontColor: '#A0A7B5'
        }

      },
      responsive: true
    };

    // this.powerMaxAllTodayChart ={
    //   labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
    //     '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    //     '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    //   datasets: [
    //     {
    //       data: this.allPowerMAX24hr,
    //       label: 'Power',
    //       backgroundColor: '#B983FF',
    //       hoverBackgroundColor: '#94B3FD'
    //     }
    //   ]
    // }


    // this.powerCompareChart = {
    //   labels: this.lable24hr,
    //   datasets: [
    //     {
    //       label: 'Power Usage Today',
    //       data: this.powerUsageToday24hr,
    //       fill: false,
    //       radius: 0,
    //       lineTension: 0,
    //       backgroundColor: this.chartBorderColor[1],
    //       borderColor: this.chartBorderColor[1],

    //     },
    //     {
    //       label: 'Power Usage Yesterday',
    //       data: this.powerUsageYesterday24hr,
    //       fill: false,
    //       radius: 0,
    //       lineTension: 0.2,
    //       backgroundColor: this.chartBorderColor[8],
    //       borderColor: this.chartBorderColor[8]
    //     }
    //   ]
    // }


    // this.energyUsageAllTodayChart = {
    //   labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
    //     '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    //     '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    //   datasets: [
    //     {
    //       label: 'Energy',
    //       backgroundColor: '#89B5AF',
    //       hoverBackgroundColor: '#94B3FD',
    //       data: this.energyDelta24hr
    //     }
    //   ]
    // };



  }



}
