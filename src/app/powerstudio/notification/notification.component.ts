import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { NotificationService } from '../service/notification.service';
import { Notification } from './notification';

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

  // data 
  alarmEvent: any;
  clearEvent: any;
  alarmEvent7d: any[];
  clearEvent7d: any[];

  //chart
  alarmHistoryChart: any;
  alarmHistoryLableLast7d: any[];
  alarmHistory7d: any[];

  //table
  allNotification: any;





  constructor(
    private breadcrumbService: AppBreadcrumbService, private notificationService: NotificationService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Notification Tasks', routerLink: ['/notification'] }
    ]);
  }

  ngOnInit(): void {

    this.notificationService.getAlarmEvent().subscribe(alarmEvent => {
      this.alarmEvent = alarmEvent;
    })

    this.notificationService.getClearEvent().subscribe(clearEvent => {
      this.clearEvent = clearEvent;
    })

    this.notificationService.getAlarmHistory7d().then(notiHistory => {
      this.alarmHistoryLableLast7d = notiHistory;
    })

    this.notificationService.getAllNotification().subscribe(allNoti=>{
      this.allNotification = allNoti;
    })





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
  

    this.alarmHistoryChart = {
      labels: this.alarmHistoryLableLast7d,
      datasets: [
        {
          label: 'Alarm',
          backgroundColor: this.chartBGColor[5],
          borderColor: this.chartBorderColor[5],
          hoverBackgroundColor: this.chartBGColor[5],
          data: this.alarmEvent7d
        }, {
          label: 'Normal',
          backgroundColor: this.chartBGColor[0],
          borderColor: this.chartBorderColor[0],
          hoverBackgroundColor: this.chartBGColor[0],
          data: this.clearEvent7d
        }
       
      ]
    }



    

  }

}
