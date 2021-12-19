import { Component, OnInit, ViewChild } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { PowerService } from '../service/power.service';
import { UIChart } from "primeng/chart";

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

  //power on site data
  powerUsageToday: any;
  pea: any;
  solar: any;

  solarPowerUsageToday: any;
  solar1: any;
  solar2: any;
  solar3: any;
  percentSolar1: any;
  percentSolar2: any;
  percentSolar3: any;


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
  ///////////////lastes
  //graph data
  powerUsage24hr: any[];
  pea24hr: any[];
  solar24hr: any[];

  solarUsage24hr: any[];
  solar1_24hr: any[];
  solar2_24hr: any[];
  solar3_24hr: any[];

  peaUsage24hr: any[];
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

  constructor(
    private breadcrumbService: AppBreadcrumbService, private powerService: PowerService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Power on Site ', routerLink: ['/power'] }
    ]);
  }

  ngOnInit(): void {


    //live data
    this.powerService.getPowerUsageToday().subscribe(powerUsageToday => {
      this.powerUsageToday = powerUsageToday;
    })

    this.powerService.getPEA().subscribe(pea => {
      this.pea = pea;
    })

    this.powerService.getPowerUsageToday().subscribe(solar => {
      this.solar = solar;
    })

    this.powerService.getSolarUsageToday().subscribe(solarPowerUsageToday => {
      this.solarPowerUsageToday = solarPowerUsageToday;
    })

    this.powerService.getSolar1().subscribe(solar1 => {
      this.solar1 = solar1
    })
    this.powerService.getSolar2().subscribe(solar2 => {
      this.solar2 = solar2
    })

    this.powerService.getSolar3().subscribe(solar3 => {
      this.solar3 = solar3
    })

    this.powerService.getPEAUsageToday().subscribe(peaPowerUsageToday => {
      this.peaPowerUsageToday = peaPowerUsageToday;
    })

    this.powerService.getMDB1().subscribe(mdb1 => {
      this.mdb1 = mdb1;
    })
    this.powerService.getMDB1().subscribe(mdb2 => {
      this.mdb2 = mdb2;
    })
    this.powerService.getMDB1().subscribe(mdb3 => {
      this.mdb3 = mdb3;
    })
    this.powerService.getMDB1().subscribe(mdb4 => {
      this.mdb4 = mdb4;
    })
    this.powerService.getMDB1().subscribe(mdb5 => {
      this.mdb5 = mdb5;
    })

    //graph

    this.powerService.getPowerUsage24hr().then(powerUsage24hr => {
      this.powerUsage24hr = powerUsage24hr;
    })

    this.powerService.getSolarUsage24hr().then(solarUsage24hr => {
      this.solar24hr = solarUsage24hr;
    })

    this.powerService.getSolar1_24hr().then(solar1_24hr => {
      this.solar1_24hr = solar1_24hr;
    })
    this.powerService.getSolar2_24hr().then(solar2_24hr => {
      this.solar1_24hr = solar2_24hr;
    })
    this.powerService.getSolar3_24hr().then(solar3_24hr => {
      this.solar1_24hr = solar3_24hr;
    })

   
    this.powerService.getPEAUsage24hr().then(PEAUsage24hr => {
      this.peaUsage24hr = PEAUsage24hr
    })

    this.powerService.getMDB1_24hr().then(MDB1_24hr=>{
      this.mdb1_24hr = MDB1_24hr;
    })

    this.powerService.getMDB2_24hr().then(MDB2_24hr=>{
      this.mdb1_24hr = MDB2_24hr;
    })

    this.powerService.getMDB3_24hr().then(MDB3_24hr=>{
      this.mdb1_24hr = MDB3_24hr;
    })

    this.powerService.getMDB4_24hr().then(MDB4_24hr=>{
      this.mdb1_24hr = MDB4_24hr;
    })
    this.powerService.getMDB5_24hr().then(MDB5_24hr=>{
      this.mdb1_24hr = MDB5_24hr;
    })


   
    
    //////////////////////
    this.powerUsageAllTodayDonutChart = {
      labels: ['All', 'Solar Cell', 'PEA'],
      datasets: [
        {
          //data: [this.powerUsageToday, this.solar, this.pea],
          data: this.powerUsageToday,
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

    this.powerUsageAllToday3LineChart = {
      labels: this.lable24hr,
      datasets: [
        {
          data: this.powerUsage24hr,
          label: 'All Power',
          backgroundColor: '#FF6384',
          hoverBackgroundColor: '#FF6384'
        },
        {
          data: this.pea24hr,
          label: 'Solar Cell',
          backgroundColor: '#36A2EB',
          hoverBackgroundColor: '#36A2EB'
        },
        {
          data: this.solar24hr,
          label: 'PEA',
          backgroundColor: '#FFCE56',
          hoverBackgroundColor: '#FFCE56'
        }
      ]
    }
    ////////////////////////
    this.solarUsageAllTodayDonutChart = {
      labels: ['AllSolar', 'Solar1', 'Solar2', 'Solar3'],
      datasets: [
        {
          //data: [this.solarPowerUsageToday, this.solar1, this.solar2,this.solar3],
          data:this.solarPowerUsageToday,
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

    this.solarUsage4lineChart = {
      labels: this.lable24hr,
      datasets: [
        {
          data: this.solarUsage24hr,
          label: 'Solar Cell',
          backgroundColor: '#FC3A52',
          hoverBackgroundColor: '#FC3A52'
        },
        {
          data: this.solar1_24hr,
          label: 'Solar1',
          backgroundColor: '#FF6384',
          hoverBackgroundColor: '#FF6384'
        },
        {
          data: this.solar2_24hr,
          label: 'Solar2',
          backgroundColor: '#36A2EB',
          hoverBackgroundColor: '#36A2EB'
        },
        {
          data: this.solar3_24hr,
          label: 'Solar3',
          backgroundColor: '#FFCE56',
          hoverBackgroundColor: '#FFCE56'
        }
      ]
    }
    ///////////////
    this.peaUsageAllTodayDonutChart = {
      labels: ['PEA', 'MDB1', 'MDB2', 'MDB3', 'MDB4', 'MDB5'],
      datasets: [
        {
          //data: [this.peaPowerUsageToday, this.mdb1, this.mdb2, this.mdb3, this.mdb4, this.mdb5],
          data: this.peaPowerUsageToday,
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

    this.peaUsage6lineChart = {
      labels: this.lable24hr,
      datasets: [
        {
          data: this.peaUsage24hr,
          label: 'PEA',
          backgroundColor: '#FC3A52',
          hoverBackgroundColor: '#FC3A52'
        },
        {
          data: this.mdb1_24hr,
          label: 'MDB1',
          backgroundColor: '#E9F679',
          hoverBackgroundColor: '#E9F679'
        },
        {
          data: this.mdb2_24hr,
          label: 'MDB2',
          backgroundColor: '#22EACA',
          hoverBackgroundColor: '#22EACA'
        },
        {
          data: this.mdb3_24hr,
          label: 'MDB3',
          backgroundColor: '#FF6384',
          hoverBackgroundColor: '#FF6384'
        },
        {
          data: this.mdb4_24hr,
          label: 'MDB4',
          backgroundColor: '#36A2EB',
          hoverBackgroundColor: '#36A2EB'
        },
        {
          data: this.mdb5_24hr,
          label: 'MDB5',
          backgroundColor: '#FFCE56',
          hoverBackgroundColor: '#FFCE56'
        }
      ]

    }
    /////////
    this.allPowerHistory24hrChart = {
      labels: this.lable24hr,
      datasets: [
        {
          data: this.powerUsage24hr,
          label: 'All Power',
          backgroundColor: '#B983FF',
          hoverBackgroundColor: '#94B3FD'
        }
      ]
    }





















  }



}
