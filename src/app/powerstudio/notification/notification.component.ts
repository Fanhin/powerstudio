import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  allnoti: any[];

  barAlarmAllData: any;
  barAlarmAllOption: any;

  chartBGColor: any;
  chartBorderColor: any;

    //all noti data (noti table)
  allNotification:Notification[];

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Notification Tasks', routerLink: ['/notification'] }
    ]);
  }

  ngOnInit(): void {

    this.allnoti = [{
      id: 1001,
      name: 'HVAC23_02_Fl06',
      date: "11-10-2021",
      notistatus: 'down',
      notitype: 'HVAC',
      area: 'Building02 Floor06',
      time: '09:36:10',
      description: 'Deny.',
      action: '',
    }, {
      id: 1002,
      name: 'MDB02_02_Fl01',
      date: "11-10-2021",
      notistatus: 'alarm',
      notitype: 'MDB',
      area: 'Building02 Floor01',
      time: '09:39:40',
      description: '',
      action: 'Acknowledge by admin.',
    }, {
      id: 1003,
      name: 'Tem02_01_Fl03',
      date: "11-10-2021",
      notistatus: 'setting',
      notitype: 'Temperature',
      area: 'Building01 Floor03',
      time: '09:56:03',
      description: 'Over heat more than 28°C',
      action: 'Acknowledge by system.',
    }];




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
