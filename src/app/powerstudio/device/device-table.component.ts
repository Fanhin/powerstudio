import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.scss']
})
export class DeviceTableComponent implements OnInit {

  alldevices: any[];

  constructor() { }

  ngOnInit(): void {
    this.alldevices = [{
      id: 1001,
      name: 'HVAC23_02_Fl06',
      date: "11-10-2021",
      status: 'offline',
      type: 'HVAC',
      area: 'Building02 Floor06'
    }, {
      id: 1002,
      name: 'MDB02_02_Fl01',
      date: "11-10-2021",
      status: 'online',
      type: 'MDB',
      area: 'Building02 Floor01'
    }, {
      id: 1003,
      name: 'Tem02_01_Fl03',
      date: "11-10-2021",
      status: 'notinit',
      type: 'Temperature',
      area: 'Building01 Floor03'
    }];

    console.log(this.alldevices);
  }

}
