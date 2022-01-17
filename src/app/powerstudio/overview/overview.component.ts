import { Component, OnInit, ViewChild, ViewEncapsulation, } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { OverviewService } from '../service/overview.service';
import { UIChart } from "primeng/chart";
import { Subscription } from 'rxjs';
import { PowerService } from '../service/power.service';
import { EnergyService } from '../service/energy.service';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None,

})




export class OverviewComponent implements OnInit {
  @ViewChild("chartDevicesDoughnutComChart") chartDevicesDoughnutComChart: UIChart;

  @ViewChild("chartpowerMaxAllTodayChart") chartpowerMaxAllTodayChart: UIChart;
  @ViewChild("chartPowerCompareChart") chartPowerCompareChart: UIChart;
  @ViewChild("chartEnergyUsageAllTodayChart") chartEnergyUsageAllTodayChart: UIChart;

  @ViewChild("chartEnergyUsageAllTodayDonutChart") chartEnergyUsageAllTodayDonutChart: UIChart;

  stacked: any[] = [];

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
  solarCostToday: any;
  allEnergy: any;
  pea: any;
  pea1: any;
  pea2: any;
  pea3: any;
  pea4: any;
  pea5: any;
  solar: any;
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

  costPea1:any;
  costPea2:any;
  costPea3:any;

  costSolar1:any;
  costSolar2:any;
  costSolar3:any;


  //chart
  devicesDoughnutComChart: any;
  devicesDoughnutComChartOptions: any;

  powerMaxAllTodayChart: any;
  powerMaxAllTodayChartOption: any;

  powerCompareChart: any;


  energyUsageAllTodayChart: any;
  energyUsageAllChartOption: any;

  energyUsageAllTodayDonutChart: any;

  //graph data
  allPowerMAX24hr: any[];
  powerUsageToday24hr: any[];
  powerUsageYesterday24hr: any[];
  energyDelta24hr: any[];


  tmpDataChart: any[];

  costDate: any[] = [];

  lable24hr: any[] = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']

  getOnPeekSub: Subscription;
  getOffPeakSub: Subscription;
  getCostTodaySub: Subscription;
  getSaveCostTodaySub: Subscription;
  getAllEnergySub: Subscription;
  getPEAAlldeviceSub: Subscription;
  getSolarAlldeviceSub: Subscription;
  getComOnlineDeviceSub: Subscription;
  getComOfflineDeviceSub: Subscription;
  getAlarmEventSub: Subscription;
  getClearEventSub: Subscription;
  get3EventSub: Subscription;

  getPEASub: Subscription;
  getSolarCellSub: Subscription;
  getSolarCostTodaySub: Subscription;


  constructor(
    private breadcrumbService: AppBreadcrumbService,
    private overviewService: OverviewService,
    private energyService: EnergyService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Overview', routerLink: ['/'] }
    ]);
  }

  ngOnDestroy(): void {
    this.getOnPeekSub.unsubscribe();
    this.getOffPeakSub.unsubscribe();
    this.getCostTodaySub.unsubscribe();
    this.getSaveCostTodaySub.unsubscribe();
    this.getAllEnergySub.unsubscribe();
    this.getPEAAlldeviceSub.unsubscribe();
    this.getSolarAlldeviceSub.unsubscribe();
    this.getComOnlineDeviceSub.unsubscribe();
    this.getComOfflineDeviceSub.unsubscribe();
    this.getAlarmEventSub.unsubscribe();
    this.getClearEventSub.unsubscribe();
    this.get3EventSub.unsubscribe();
    this.getPEASub.unsubscribe();
    this.getSolarCellSub.unsubscribe();
   
    console.log("oveview on destroy");


  }

  callEnergyUsageAllTodayDonutChart() {

    this.energyUsageAllTodayDonutChart = {
      labels: ['PEA', 'Solar Cell'],
      datasets: [
        {
          data: [this.pea, this.solar],
          backgroundColor: [
            "#1b74c5",
            "#008000",

          ],
          hoverBackgroundColor: [
            "#1b74c5",
            "#008000",

          ]
        }
      ]
    }

  }

  getDate(date: Date) {
    var tmpDate = new Date(date);
    var day = tmpDate.getDate();
    var month = tmpDate.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    var year = tmpDate.getFullYear();
    var dateStr = day + "/" + month + "/" + year;
    return dateStr;
  }

  ngOnInit(): void {

    this.stacked.push({value: 20,type: "success"},{value: 100,type: "info"})

  

  
    var yesterday1 = new Date(new Date().setDate(new Date().getDate() - 1));
    var yesterday2 = new Date(new Date().setDate(new Date().getDate() - 2));
    var yesterday3 = new Date(new Date().setDate(new Date().getDate() - 3));

    this.costDate[0] = this.getDate(yesterday1)
    this.costDate[1] =this.getDate(yesterday2)
    this.costDate[2] = this.getDate(yesterday3)



    this.getPEASub = this.energyService.getPEA().subscribe((pea: any) => {
      if (this.pea != pea) {
        this.pea = pea;
        this.callEnergyUsageAllTodayDonutChart();
        this.chartEnergyUsageAllTodayDonutChart.refresh();
      }

    })

    this.getSolarCellSub = this.energyService.getSolar().subscribe((solar: any) => {
      if (this.solar != solar) {
        this.solar = solar;
        this.callEnergyUsageAllTodayDonutChart();
        this.chartEnergyUsageAllTodayDonutChart.refresh();

      }

    })


    //this.allPowerMAX24hr = this.formatData(this.tmpDataChart);

    //data info websocket
    this.getOnPeekSub = this.overviewService.getOnPeak().subscribe(onPeak => {
      this.onPeak = onPeak;
    })

    this.getOffPeakSub = this.overviewService.getOffPeak().subscribe(offPeak => {
      this.offPeak = offPeak;
    })

    this.getCostTodaySub = this.overviewService.getCostToday().subscribe(costToday => {
      this.costToday = costToday;
    })

 


    this.getSaveCostTodaySub = this.overviewService.getSaveCostToday().subscribe(saveCostToday => {
      console.log("save cost data" + saveCostToday);


      this.saveCostToday = saveCostToday;
      if (this.saveCostToday > 0) {
        document.getElementById('savecost').style.color = "green"

      } else {
        document.getElementById('savecost').style.color = "red"

      }
    })

    this.getAllEnergySub = this.overviewService.getAllEnergy().subscribe(allEnergy => {

      this.allEnergy = allEnergy;


    })

    this.getPEAAlldeviceSub = this.overviewService.getPEAAlldevice().subscribe((pea: any) => {
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

  
    this.getSolarAlldeviceSub = this.overviewService.getSolarAlldevice().subscribe(solar => {
      this.solar1 = solar[0].energy.toFixed(2);
      this.solar2 = solar[1].energy.toFixed(2);
      this.solar3 = solar[2].energy.toFixed(2);

    })

   

    this.getComOnlineDeviceSub = this.overviewService.getComOnlineDevice().subscribe(comOnlineDevice => {
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

    this.getComOfflineDeviceSub = this.overviewService.getComOfflineDevice().subscribe(comOfflineDevice => {
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
    this.getAlarmEventSub = this.overviewService.getAlarmEvent().subscribe(alarmEvent => {
      this.alarmEvent = alarmEvent;
    })

    this.getClearEventSub = this.overviewService.getClearEvent().subscribe(clearEvent => {
      this.clearEvent = clearEvent;
    })

    this.get3EventSub = this.overviewService.get3Event().subscribe((data: any) => {
      this.temp = data["temperature"].toFixed(2);
      this.hum = data["humidity"].toFixed(2);
      this.smokeStatus = data["smokeStatus"];
    }

    )


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




    });

    this.overviewService.getPowerUsageToday24hr().then(data => {
      this.powerUsageToday24hr = data.map(a => a.power);


      this.powerCompareChart = {
        labels: this.lable24hr,
        datasets: [
          {
            label: 'Power Usage Today',
            data: [200,400,undefined,50],
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
            backgroundColor: '#9e9e9e',
            borderColor: '#9e9e9e'
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
            backgroundColor: '#9e9e9e',
            borderColor: '#9e9e9e'
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

    ///

    this.get3EventSub = this.overviewService.get3Event().subscribe((data: any) => {
      this.temp = data["temperature"].toFixed(2);
      this.hum = data["humidity"].toFixed(2);
      this.smokeStatus = data["smokeStatus"];
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
