import { Component, OnInit, ViewChild } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { PowerService } from '../service/power.service';
import { UIChart } from "primeng/chart";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {
  @ViewChild("chartPowerUsageAllTodayDonutChart") chartPowerUsageAllTodayDonutChart: UIChart;
  @ViewChild("chartPowerUsageAllToday3LineChart") chartPowerUsageAllToday3LineChart: UIChart;

  @ViewChild("chartSolarUsageAllTodayDonutChart") chartSolarUsageAllTodayDonutChart: UIChart;
  @ViewChild("chartsolarUsage4lineChart") chartsolarUsage4lineChart: UIChart;

  @ViewChild("chartPeaUsageAllTodayDonutChart") chartPeaUsageAllTodayDonutChart: UIChart;
  @ViewChild("chartPeaUsage6lineChart") chartPeaUsage6lineChart: UIChart;

  //power consumption
  powerUsageToday: any;
  pea: any;
  solar: any;

  //solar cell
  solarPowerUsageToday: any;
  solar1: any;
  solar2: any;
  solar3: any;
  percentSolar1: any;
  percentSolar2: any;
  percentSolar3: any;

  //pea
  peaPowerUsageToday: any;
  mdb1: any;
  mdb2: any;
  mdb3: any;
  mdb4: any;
  mdb5: any;
  percentMdb1: any;
  percentMdb2: any;
  percentMdb3: any;
  percentMdb4: any;
  percentMdb5: any;

  //graph data
  //power Usage All Today
  powerAll24hr: any[];
  pea24hr: any[];
  solar24hr: any[];

  //solar power Usag today

  solar1_24hr: any[];
  solar2_24hr: any[];
  solar3_24hr: any[];

  //pea  power usage today

  mdb1_24hr: any[];
  mdb2_24hr: any[];
  mdb3_24hr: any[];
  mdb4_24hr: any[];
  mdb5_24hr: any[];

  //raw value
  allPowerHistory24hr: any[];

  //chart
  powerUsageAllTodayDonutChart: any;
  powerUsageAllToday3LineChart: any; // all = solar+pea

  solarUsageAllTodayDonutChart: any;
  solarUsage4lineChart: any;

  peaUsageAllTodayDonutChart: any;
  peaUsage6lineChart: any;

  allPowerHistory24hrChart: any;





  lable24hr: any[] = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']

  getPowerUsageTodaySub: Subscription;
  getPEASub: Subscription;
  getSolarCellSub: Subscription;
  getSolarUsageTodaySub: Subscription;
  getSolarAllDeviceSub: Subscription;
  getPEAUsageTodaySub: Subscription;
  getMDBAllDeviceSub: Subscription;
  constructor(
    private breadcrumbService: AppBreadcrumbService, private powerService: PowerService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Power on Site ', routerLink: ['/power'] }
    ]);
  }

  ngOnDestroy() {
    this.getPowerUsageTodaySub.unsubscribe();
    this.getPEASub.unsubscribe();
    this.getSolarCellSub.unsubscribe();
    this.getSolarUsageTodaySub.unsubscribe();
    this.getSolarAllDeviceSub.unsubscribe();
    this.getPEAUsageTodaySub.unsubscribe();
    this.getMDBAllDeviceSub.unsubscribe();

  }

  ngOnInit() {


    //live data
    this.getPowerUsageTodaySub=this.powerService.getPowerUsageToday().subscribe((powerUsageToday: any) => {

      if (this.powerUsageToday != powerUsageToday.toFixed(2)) {
        this.powerUsageToday = powerUsageToday.toFixed(2);
        this.callPowerUsageAllTodayDonutChart();
        this.chartPowerUsageAllTodayDonutChart.refresh();

      }

    })

    this.getPEASub=this.powerService.getPEA().subscribe((pea: any) => {
      if (this.pea != pea.toFixed(2)) {
        this.pea = pea.toFixed(2);
        this.callPowerUsageAllTodayDonutChart();
        this.chartPowerUsageAllTodayDonutChart.refresh();
      }

    })

    this.getSolarCellSub=this.powerService.getSolarCell().subscribe((solar: any) => {
      if (this.solar != solar.toFixed(2)) {
        this.solar = parseFloat(solar).toFixed(2);
        this.callPowerUsageAllTodayDonutChart();
        this.chartPowerUsageAllTodayDonutChart.refresh();

      }

    })
    //////////////////////

    this.getSolarUsageTodaySub=this.powerService.getSolarUsageToday().subscribe((solarPowerUsageToday: any) => {

      if (this.solarPowerUsageToday != solarPowerUsageToday.toFixed(2)) {

        this.solarPowerUsageToday = solarPowerUsageToday.toFixed(2);
        this.callSolarUsageAllTodayDonutChart();
        this.chartSolarUsageAllTodayDonutChart.refresh();

      }

    })

    this.getSolarAllDeviceSub=this.powerService.getSolarAllDevice().subscribe(solar => {

      if (this.solar1 != solar[0].power.toFixed(2) || this.solar2 != solar[1].power.toFixed(2) || this.solar3 != solar[2].power.toFixed(2)) {
        this.solar1 = solar[0].power.toFixed(2);
        this.solar2 = solar[1].power.toFixed(2);
        this.solar3 = solar[2].power.toFixed(2);

        this.callSolarUsageAllTodayDonutChart();
        this.chartSolarUsageAllTodayDonutChart.refresh();

      }




    })

    /////////////////////////////////
    this.getPEAUsageTodaySub=this.powerService.getPEAUsageToday().subscribe((peaPowerUsageToday: any) => {
      if (this.peaPowerUsageToday != peaPowerUsageToday.toFixed(2)) {
        this.peaPowerUsageToday = peaPowerUsageToday.toFixed(2);
        this.callPeaUsageAllTodayDonutChart();
        this.chartPeaUsageAllTodayDonutChart.refresh();

      }


    })

    this.getMDBAllDeviceSub=this.powerService.getMDBAllDevice().subscribe((mdb: any) => {


      mdb.forEach(element => {
        switch (element._id) {
          case "MDB1":

            if (this.mdb1 != element.power.toFixed(2)) {
              this.mdb1 = element.power.toFixed(2);
              this.callPeaUsageAllTodayDonutChart();
              this.chartPeaUsageAllTodayDonutChart.refresh();
            }
            break;
          case "MDB2":

            if (this.mdb2 != element.power.toFixed(2)) {
              this.mdb2 = element.power.toFixed(2);
              this.callPeaUsageAllTodayDonutChart();
              this.chartPeaUsageAllTodayDonutChart.refresh();
            }
            break;
          case "B1":

            if (this.mdb3 != element.power.toFixed(2)) {
              this.mdb3 = element.power.toFixed(2);
              this.callPeaUsageAllTodayDonutChart();
              this.chartPeaUsageAllTodayDonutChart.refresh();
            }
            break;
          case "MDB4":

            if (this.mdb4 != element.power.toFixed(2)) {
              this.mdb4 = element.power.toFixed(2);
              this.callPeaUsageAllTodayDonutChart();
              this.chartPeaUsageAllTodayDonutChart.refresh();
            }
            break;
          case "MDB5":

            if (this.mdb5 != element.power.toFixed(2)) {
              this.mdb5 = element.power.toFixed(2);
              this.callPeaUsageAllTodayDonutChart();
              this.chartPeaUsageAllTodayDonutChart.refresh();
            }
            break;
          default:
            break;
        }
      });





    })

    //////////////////////////
    //graph bar

    this.powerService.getPowerUsage24hr().then(powerAll24hr => {
      this.powerAll24hr = powerAll24hr.map(a => a.power);
      this.callPowerUsageAllToday3LineChart();

    })

    this.powerService.getSolarUsage24hr().then(solarUsage24hr => {
      this.solar24hr = solarUsage24hr.map(a => a.power);
      this.callPowerUsageAllToday3LineChart();
    })

    this.powerService.getPEAUsage24hr().then(pea24hr => {
      this.pea24hr = pea24hr.map(a => a.power);
      this.callPowerUsageAllToday3LineChart();
    })
    /////////////////////////

    this.powerService.getSolar1_24hr().then(solar1_24hr => {
      this.solar1_24hr = solar1_24hr.map(a => a.power);
      this.callSolarUsage4lineChart();
    })
    this.powerService.getSolar2_24hr().then(solar2_24hr => {
      this.solar2_24hr = solar2_24hr.map(a => a.power);
      this.callSolarUsage4lineChart();
    })
    this.powerService.getSolar3_24hr().then(solar3_24hr => {
      this.solar3_24hr = solar3_24hr.map(a => a.power);
      this.callSolarUsage4lineChart();
    })




    this.powerService.getMDB1_24hr().then(MDB1_24hr => {
      this.mdb1_24hr = MDB1_24hr.map(a => a.power);
      this.callPeaUsage6lineChart();
    })

    this.powerService.getMDB2_24hr().then(MDB2_24hr => {
      this.mdb2_24hr = MDB2_24hr.map(a => a.power);
      this.callPeaUsage6lineChart();
    })

    this.powerService.getMDB3_24hr().then(MDB3_24hr => {
      this.mdb3_24hr = MDB3_24hr.map(a => a.power);
      this.callPeaUsage6lineChart();
    })

    this.powerService.getMDB4_24hr().then(MDB4_24hr => {
      this.mdb4_24hr = MDB4_24hr.map(a => a.power);
      this.callPeaUsage6lineChart();
    })
    this.powerService.getMDB5_24hr().then(MDB5_24hr => {
      this.mdb5_24hr = MDB5_24hr.map(a => a.power);
      this.callPeaUsage6lineChart();
    })





    this.allPowerHistory24hrChart = {
      labels: this.lable24hr,
      datasets: [
        {
          data: this.powerAll24hr,
          label: 'All Power',
          backgroundColor: '#B983FF',
          hoverBackgroundColor: '#94B3FD'
        }
      ]
    }




  }
  //live data donut

  callPowerUsageAllTodayDonutChart() {

    this.powerUsageAllTodayDonutChart = {
      labels: ['All', 'Solar Cell', 'PEA'],
      datasets: [
        {
          data: [this.powerUsageToday, this.solar, this.pea],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    }

  }

  callSolarUsageAllTodayDonutChart() {

    this.solarUsageAllTodayDonutChart = {
      labels: ['AllSolar', 'Solar1', 'Solar2', 'Solar3'],
      datasets: [
        {
          data: [this.solarPowerUsageToday, this.solar1, this.solar2, this.solar3],
          backgroundColor: [
            "#FC3A52",
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FC3A52",
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    }

  }

  callPeaUsageAllTodayDonutChart() {
    this.peaUsageAllTodayDonutChart = {
      labels: ['PEA', 'MDB1', 'MDB2', 'MDB3', 'MDB4', 'MDB5'],
      datasets: [
        {
          data: [this.peaPowerUsageToday, this.mdb1, this.mdb2, this.mdb3, this.mdb4, this.mdb5],

          backgroundColor: [
            "#FC3A52",
            '#E9F679',
            "#22EACA",
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FC3A52",
            '#E9F679',
            "#22EACA",
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]

    }

  }

  //rest data line

  callPowerUsageAllToday3LineChart() {

    this.powerUsageAllToday3LineChart = {
      labels: this.lable24hr,
      datasets: [
        {
          data: this.powerAll24hr,
          label: 'All Power',
          fill: false,
          lineTension: 0,
          radius: 1,
          backgroundColor: '#FF6384',
          borderColor: '#FF6384'
        },
        {
          data: this.solar24hr,
          label: 'Solar Cell',
          fill: false,
          lineTension: 0,
          radius: 1,
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB'
        },
        {
          data: this.pea24hr,
          label: 'PEA',
          fill: false,
          lineTension: 0,
          radius: 1,
          backgroundColor: '#FFCE56',
          borderColor: '#FFCE56'
        }
      ]
    }

  }

  callSolarUsage4lineChart() {
    this.solarUsage4lineChart = {
      labels: this.lable24hr,
      datasets: [
        {
          data: this.solar24hr,
          label: 'Solar Cell',
          fill: false,
          lineTension: 0,
          radius: 1,
          backgroundColor: '#FC3A52',
          borderColor: '#FC3A52'
        },
        {
          data: this.solar1_24hr,
          label: 'Solar1',
          fill: false,
          lineTension: 0,
          radius: 1,
          backgroundColor: '#FF6384',
          borderColor: '#FF6384'
        },
        {
          data: this.solar2_24hr,
          label: 'Solar2',
          fill: false,
          lineTension: 0,
          radius: 1,
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB'
        },
        {
          data: this.solar3_24hr,
          label: 'Solar3',
          fill: false,
          lineTension: 0,
          radius: 1,
          backgroundColor: '#FFCE56',
          borderColor: '#FFCE56'
        }
      ]
    }
  }

  callPeaUsage6lineChart() {

    this.peaUsage6lineChart = {
      labels: this.lable24hr,
      datasets: [
        {
          data: this.pea24hr,
          label: 'PEA',
          fill: false,
          lineTension: 0,
          radius: 1,
          backgroundColor: '#FC3A52',
          borderColor: '#FC3A52'
        },
        {
          data: this.mdb1_24hr,
          label: 'MDB1',
          fill: false,
          radius: 1,
          lineTension: 0,
          backgroundColor: '#E9F679',
          borderColor: '#E9F679'
        },
        {
          data: this.mdb2_24hr,
          label: 'MDB2',
          fill: false,
          radius: 1,
          lineTension: 0,
          backgroundColor: '#22EACA',
          borderColor: '#22EACA'
        },
        {
          data: this.mdb3_24hr,
          label: 'MDB3',
          fill: false,
          radius: 1,
          lineTension: 0,
          backgroundColor: '#FF6384',
          borderColor: '#FF6384'
        },
        {
          data: this.mdb4_24hr,
          label: 'MDB4',
          fill: false,
          radius: 1,
          lineTension: 0,
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB'
        },
        {
          data: this.mdb5_24hr,
          label: 'MDB5',
          fill: false,
          radius: 1,
          lineTension: 0,
          backgroundColor: '#FFCE56',
          borderColor: '#FFCE56'
        }
      ]

    }

  }
















}
