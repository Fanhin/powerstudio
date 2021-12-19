import { Component, OnInit } from '@angular/core';
import { Customer } from '../domain/noti-device';
import { DeviceService } from '../service/device.service';
import { NotificationService } from '../service/notification.service';
import { Device } from './device';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.scss']
})
export class DeviceTableComponent implements OnInit {

  alldevices: any;

  devicesHistory:Device[];

  selectedDevice: Device[];

  constructor(private notificationService:NotificationService) { }

  ngOnInit(): void {

    this.notificationService.getAllDevice().subscribe(allDevice =>{
      this.alldevices = allDevice;
    })
    

    console.log(this.alldevices);
  }

}
