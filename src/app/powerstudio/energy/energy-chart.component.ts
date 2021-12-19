import { Component, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/chart';
import { forkJoin } from 'rxjs';
import { EnergyService } from '../service/energy.service';

@Component({
  selector: 'app-energy-chart',
  templateUrl: './energy-chart.component.html',
  styleUrls: ['./energy-chart.component.scss']
})
export class EnergyChartComponent implements OnInit {
  @ViewChild("chartPEAandSolarDonutChart") chartPEAandSolarDonutChart: UIChart;
  @ViewChild("chartsolarDonutChart") chartsolarDonutChart: UIChart;
  @ViewChild("chartpeaDonutChart") chartpeaDonutChart: UIChart;


  chartBGColor: any;
  chartBorderColor: any;

  powerSumptionChart: any;
  powerSumptionOption: any;

  powerSolarChart: any;
  powerSolarOption: any;

  powerSolarAllChart: any;
  powerSolarAllOption: any;


  //top chart span value
  //mdb1-5 and solar1-3
  allEnergy: any;
  pea1: any;
  pea2: any;
  pea3: any;
  pea4: any;
  pea5: any;
  solar1: any;
  solar2: any;
  solar3: any;

  pea1Percent: any;
  pea2Percent: any;
  pea3Percent: any;
  pea4Percent: any;
  pea5Percent: any;
  solar1Percent: any;
  solar2Percent: any;
  solar3Percent: any;



  //Energy on site data //div 1
  energyUsageToday: any;
  pea: any;
  solar: any;
  PEAandSolarDonutChart: any;
  PEAandSolarDonut: any[];
  sumPEAandSolar24hrChart: any;
  sumPEAandSolar24hr: any[];

  //div2
  solarEnergyUsageToday: any;

  solar1_24hr: any[];
  solar2_24hr: any[];
  solar3_24hr: any[];
  solarDonutChart: any;
  solarDonut: any[];
  sumSolar24hrChart: any;
  sumSolar24hr: any[];

  //div 3
  peaEnergyUsageToday: any;

  mdb1_24hr: any[];
  mdb2_24hr: any[];
  mdb3_24hr: any[];
  mdb4_24hr: any[];
  mdb5_24hr: any[];
  peaDonutChart: any;
  peaDonut: any[];
  sumPEA24hrChart: any;
  sumPEA24hr: any[];

  energyAllChart: any;
  energyAll7d: any[];

  lable24hr: any[] = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']


  constructor(private energyService: EnergyService) { }

  ngOnInit(): void {



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



    this.energyService.getAllEnergy().subscribe(allEnergy => {

      this.allEnergy = allEnergy;
      this.energyUsageToday = allEnergy;

    })

    this.energyService.getPEA().subscribe(pea => {


      if (this.pea != pea) {
        this.pea = pea;
        this.peaEnergyUsageToday = pea;

        this.PEAandSolarDonutChart = {
          labels: ['PEA', 'Solar'],
          datasets: [
            {
              data: [this.pea, this.solar],
              hoverBackgroundColor: [this.chartBGColor[1], this.chartBGColor[3]],
              backgroundColor: [
                this.chartBGColor[1],
                this.chartBGColor[3],
              ]
            }]
        }
        this.chartPEAandSolarDonutChart.refresh();

      }



    })

    this.energyService.getSolar().subscribe(solar => {



      if (this.solar != solar) {
        this.solar = solar;
        this.solarEnergyUsageToday = solar;

        this.PEAandSolarDonutChart = {
          labels: ['PEA', 'Solar'],
          datasets: [
            {
              data: [this.pea, this.solar],
              hoverBackgroundColor: [this.chartBGColor[1], this.chartBGColor[3]],
              backgroundColor: [
                this.chartBGColor[1],
                this.chartBGColor[3]
              ]
            }]
        }

        this.chartPEAandSolarDonutChart.refresh();

        

      }

    })



    this.energyService.getPEAAlldevice().subscribe((pea: any) => {
      pea.forEach(element => {
        switch (element._id) {
          case "MDB1":
            this.pea1 = element.energy.toFixed(2);
            this.pea1Percent = ((this.pea1 / this.allEnergy) * 100).toFixed(2)
            break;
          case "MDB2":
            this.pea2 = element.energy.toFixed(2);
            this.pea2Percent = ((this.pea2 / this.allEnergy) * 100).toFixed(2)
            break;
          case "B1":
            this.pea3 = element.energy.toFixed(2);
            this.pea3Percent = ((this.pea3 / this.allEnergy) * 100).toFixed(2)
            break;
          case "MDB4":
            this.pea4 = element.energy.toFixed(2);
            this.pea4Percent = ((this.pea4 / this.allEnergy) * 100).toFixed(2)
            break;
          case "MDB5":
            this.pea5 = element.energy.toFixed(2);
            this.pea5Percent = ((this.pea5 / this.allEnergy) * 100).toFixed(2)
            break;
          default:
            break;
        }
      });

    })

    this.energyService.getSolarAlldevice().subscribe(solar => {

        this.solar1 = solar[0].energy.toFixed(2);
        this.solar1Percent = (this.solar1 / this.allEnergy * 100).toFixed(2)
        this.solar2 = solar[1].energy.toFixed(2);
        this.solar2Percent = (this.solar2 / this.allEnergy * 100).toFixed(2)
        this.solar3 = solar[2].energy.toFixed(2);
        this.solar3Percent = (this.solar3 / this.allEnergy * 100).toFixed(2)

        if (this.solar1 != solar[0].energy && this.solar1 != solar[1].energy && this.solar2 != solar[2].energy ) {
          
        }

        this.solarDonutChart = {
          labels: ['Solar1', 'Solar2', 'Solar3'],
          datasets: [
            {
              data: [this.solar1,this.solar2,this.solar3],
              hoverBackgroundColor: [this.chartBGColor[1], this.chartBGColor[3]],
              backgroundColor: [
                this.chartBGColor[1],
                this.chartBGColor[3],
                this.chartBGColor[2],
                "#316B83"
              ]
            }]
        }
        this.chartsolarDonutChart.refresh();



        


    })

    //donutt chart
   






    this.peaDonutChart = {
      labels: ['PEA', 'MDB1', 'MDB2', 'MDB3', 'MDB4', 'MDB5'],
      datasets: [
        {
          data: this.peaDonut,
          hoverBackgroundColor: [this.chartBGColor[1], this.chartBGColor[3]],
          backgroundColor: [
            this.chartBGColor[1],
            this.chartBGColor[3],
            this.chartBGColor[2],
            "#316B83",
            "#B97A95",
            "#F6AE99"
          ]
        }]
    }


    //bar chart
    this.sumPEAandSolar24hrChart = {
      labels: this.lable24hr,
      datasets: [
        {
          label: 'PEA',
          backgroundColor: this.chartBGColor[1],
          hoverBackgroundColor: this.chartBGColor[0],
          data: this.sumPEA24hr
        }, {
          label: 'Solar Cell',
          backgroundColor: this.chartBGColor[3],
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.sumSolar24hr
        }

      ]
    };

    this.sumSolar24hrChart = {
      labels: this.lable24hr,
      datasets: [
        {
          label: 'Solar',
          backgroundColor: this.chartBGColor[1],
          hoverBackgroundColor: this.chartBGColor[0],
          data: this.sumSolar24hr
        }, {
          label: 'Solar1',
          backgroundColor: this.chartBGColor[3],
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.solar1_24hr
        }, {
          label: 'Solar2',
          backgroundColor: this.chartBGColor[2],
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.solar2_24hr
        }, {
          label: 'Solar3',
          backgroundColor: "#316B83",
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.solar3_24hr
        }

      ]
    };

    this.sumPEA24hrChart = {
      labels: this.lable24hr,
      datasets: [
        {
          label: 'PEA',
          backgroundColor: this.chartBGColor[1],
          hoverBackgroundColor: this.chartBGColor[0],
          data: this.sumSolar24hr
        }, {
          label: 'MDB1',
          backgroundColor: this.chartBGColor[3],
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.mdb1_24hr
        }, {
          label: 'MDB2',
          backgroundColor: this.chartBGColor[2],
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.mdb2_24hr
        }, {
          label: 'MDB3',
          backgroundColor: "#316B83",
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.mdb3_24hr
        }, {
          label: 'MDB4',
          backgroundColor: "#B97A95",
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.mdb4_24hr
        }, {
          label: 'MDB5',
          backgroundColor: "#F6AE99",
          hoverBackgroundColor: this.chartBGColor[1],
          data: this.mdb5_24hr
        },

      ]
    };



    this.energyAllChart = {
      labels: this.lable24hr,
      datasets: [
        {
          label: 'Energy All ',
          backgroundColor: "#F38BA0",
          hoverBackgroundColor: this.chartBGColor[0],
          data: this.energyAll7d
        }

      ]
    };







  }

}
