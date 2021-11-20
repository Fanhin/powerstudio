import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-chart',
  templateUrl: './energy-chart.component.html',
  styleUrls: ['./energy-chart.component.scss']
})
export class EnergyChartComponent implements OnInit {

  lineProgressiveData: any;
  lineChartsOptions: any;
  chartBGColor: any;
  chartBorderColor: any;

  powerSumptionChart: any;
  powerSumptionOption: any;

  powerSolarChart: any;
  powerSolarOption: any;

  powerSolarAllChart: any;
  powerSolarAllOption: any;

  barPowerUseTodayChart: any;
  barPowerUseTodayOption: any;

  constructor() { }

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

    this.lineProgressiveData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Voltage Usage Today',
          data: data,
          fill: false,
          radius: 0,
          lineTension: 0,
          backgroundColor: this.chartBorderColor[1],
          borderColor: this.chartBorderColor[1]
        },
        {
          label: 'Voltage Usage Yesterday',
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




    this.powerSumptionChart = {
      labels: ['Solar', 'PEA'],
      datasets: [
        {
          data: [344, 280],
          backgroundColor: [
            this.chartBGColor[1],
            this.chartBGColor[3]
          ]
        }]
    }

    this.powerSumptionOption = {
      legend: {
        display: false,
      },
      responsive: true,
      cutoutPercentage: 30
      // cutoutPercentage: 70
    };



    this.powerSolarChart = {
      labels: ['Panel01', 'Panel02', 'Panel03'],
      datasets: [
        {
          data: [114, 130, 100],
          backgroundColor: [
            this.chartBGColor[0],
            this.chartBGColor[1],
            this.chartBGColor[2]
          ]
        }]
    }

    this.powerSolarOption = {
      legend: {
        display: false,
      },
      responsive: true,
      cutoutPercentage: 0
    };





    this.powerSolarAllChart = {
      labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
      datasets: [
        {
          label: 'Panel01',
          backgroundColor: this.chartBGColor[0],
          borderColor: this.chartBorderColor[0],
          data: [12, 34, 30, 45, 56, 68, 51]
        }, {
          label: 'Panel02',
          backgroundColor: this.chartBGColor[1],
          borderColor: this.chartBorderColor[1],
          data: [26, 32, 40, 53, 64, 57, 46]
        }, {
          label: 'Panel03',
          backgroundColor: this.chartBGColor[2],
          borderColor: this.chartBorderColor[2],
          data: [12, 34, 29, 54, 50, 42, 36]
        }
      ]
    };

    this.powerSolarAllOption = {
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




    this.barPowerUseTodayChart = {
      labels: ['11/10/2021', '10/10/2021', '09/10/2021', '08/10/2021', '07/10/2021', '06/10/2021', '05/10/2021'],
      datasets: [
        {
          label: 'PEA',
          backgroundColor: this.chartBGColor[3],
          borderColor: this.chartBorderColor[3],
          data: [46, 52, 49, 42, 57, 37, 51]
        }, {
          label: 'Solar',
          backgroundColor: this.chartBGColor[1],
          borderColor: this.chartBorderColor[1],
          data: [48, 22, 34, 48, 28, 49, 24]
        }, {
          label: 'Power Consumption',
          backgroundColor: this.chartBGColor[8],
          borderColor: this.chartBorderColor[8],
          data: [94, 74, 83, 90, 85, 86, 75]
        }
      ]
    };

    this.barPowerUseTodayOption = {
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
          stacked: false,
          ticks: {
            fontColor: '#A0A7B5'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
        xAxes: [{
          stacked: false,
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
