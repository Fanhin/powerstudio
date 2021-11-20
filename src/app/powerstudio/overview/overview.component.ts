import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  chartBGColor: any;
  chartBorderColor: any;

  chartsOptions2: any;
  pieData: any;

  barAlarmAllData: any;
  barAlarmAllOption: any;

  barPowerUseTodayChart: any;
  barPowerUseTodayOption: any;

  lineProgressiveData: any;
  lineChartsOptions: any;

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Overview', routerLink: ['/'] }
    ]);
  }

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


    this.pieData = {
      labels: ['Online', 'Offline', 'Not Init.'],
      datasets: [
        {
          data: [540, 325, 702],
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



    this.barAlarmAllData = {
      labels: ['11/10/2021', '10/10/2021', '09/10/2021', '08/10/2021', '07/10/2021', '06/10/2021', '05/10/2021'],
      datasets: [
        {
          label: 'System alert',
          backgroundColor: this.chartBGColor[5],
          borderColor: this.chartBorderColor[5],
          data: [46, 32, 51, 28, 48, 54, 51]
        }, {
          label: 'Task setting',
          backgroundColor: this.chartBGColor[0],
          borderColor: this.chartBorderColor[0],
          data: [12, 22, 16, 8, 19, 14, 15]
        }, {
          label: 'Com. Down',
          backgroundColor: this.chartBGColor[3],
          borderColor: this.chartBorderColor[3],
          data: [3, 1, 6, 5, 1, 0, 3]
        }
      ]
    };

    this.barAlarmAllOption = {
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
            labelString: 'Alarm Counts'
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






  }

}
