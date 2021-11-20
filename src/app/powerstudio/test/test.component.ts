import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    chartBGColor: any;
  chartBorderColor: any;

    barAlarmAllData: any;
  barAlarmAllOption: any;

    constructor(
        private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
          { label: 'Power Studio' },
          { label: 'TEST', routerLink: ['/test'] }
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
  }

}
