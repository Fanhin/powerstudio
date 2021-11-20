import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})

export class TemperatureComponent implements OnInit {

  selectionViewType: string = 'all';
  componentType: string = 'temp';

  dateLists: any;
  weekDay: any;
  chartBGColor: any;
  chartBorderColor: any;

  // For Test
  mockupZoneData: any = [];
  mockupTempSensorsData: any = [];
  mockupHumiditySensorsData: any = [];
  mockupCO2SensorsData: any = [];

  sensorTempDataList: Object = {};

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Cocoa' },
      { label: 'Temperature', routerLink: ['/cocoa/temperature'] }
    ]);
  }

  ngOnInit(): void {

    this.weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdays', 'Sunday'];

    this.dateLists = [
      { date: 'Default', code: 1 },
      { date: 'Hours', code: 2 },
      { date: 'Days', code: 3 },
      { date: 'Weeks', code: 4 },
      { date: 'Month', code: 5 },
      { date: 'Years', code: 6 }
    ];

    this.chartBGColor = [
      'rgba(255, 0, 0, 0.4)',
      'rgba(255, 127, 14, 0.4)',
      'rgba(255, 218, 2, 0.4)',
      'rgba(145, 208, 23, 0.4)',
      'rgba(0, 153, 0, 0.4)',
      'rgba(26, 144, 129, 0.4)',
      'rgba(0, 204, 204, 0.4)',
      'rgba(0, 128, 255, 0.4)',
      'rgba(0, 0, 255, 0.4)',
      'rgba(127, 0, 255, 0.4)',
      'rgba(255, 0, 255, 0.4)',
      'rgba(204, 0, 102, 0.4)',
      'rgba(0, 102, 102, 0.4)',
      'rgba(51, 0, 102, 0.4)',
      'rgba(102, 0, 51, 0.4)',
      'rgba(0, 51, 102, 0.4)',
      'rgba(32, 32, 32, 0.4)',
      'rgba(160, 160, 160, 0.4)',
    ];

    this.chartBorderColor = [
      'rgba(255, 0, 0, 0.5)',
      'rgba(255, 127, 14, 0.5)',
      'rgba(255, 218, 2, 0.5)',
      'rgba(145, 208, 23, 0.5)',
      'rgba(0, 153, 0, 0.5)',
      'rgba(26, 144, 129, 0.5)',
      'rgba(0, 204, 204, 0.5)',
      'rgba(0, 128, 255, 0.5)',
      'rgba(0, 0, 255, 0.5)',
      'rgba(127, 0, 255, 0.5)',
      'rgba(255, 0, 255, 0.5)',
      'rgba(204, 0, 102, 0.5)',
      'rgba(0, 102, 102, 0.5)',
      'rgba(51, 0, 102, 0.5)',
      'rgba(102, 0, 51, 0.5)',
      'rgba(0, 51, 102, 0.5)',
      'rgba(32, 32, 32, 0.5)',
      'rgba(160, 160, 160, 0.5)',
    ];

    // ======= Data From Backend =======
    this.mockupZoneData = [{
      id: 'a',
      name: 'Building Zone A',
      tempSrnsors: [1, 2, 3, 7],
      humiditySensors: [4, 5, 6],
      co2Sensors: [1, 2, 3]
    }, {
      id: 'b',
      name: 'Building Zone B',
      tempSrnsors: [4, 5, 6],
      humiditySensors: [1, 2, 3],
      co2Sensors: [4, 5, 6]
    }, {
      id: 'c',
      name: 'Building Zone C',
      tempSrnsors: [8, 9, 10],
      humiditySensors: [],
      co2Sensors: []
    }, {
      id: 'd',
      name: 'Building Zone D',
      tempSrnsors: [11, 12],
      humiditySensors: [],
      co2Sensors: []
    }]

    // ======= Data From Backend =======
    this.mockupTempSensorsData = [{
      id: 1,
      name: 'Temp. Sensor 01',
      type: 'temp',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 1,
      humidityID: 4,
      co2ID: 1,
      backgroundColor: this.chartBGColor[0],
      borderColor: this.chartBorderColor[0],
      data: [23.5, 24.8, 25.2, 23.1, 22.2, 23.7, 22.9],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 01',
      co2Name: 'CO\u2082 Sensor 01',
      humidityName: 'Humidity Sensor 04',
    }, {
      id: 2,
      name: 'Temp. Sensor 02',
      type: 'temp',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 2,
      humidityID: 5,
      co2ID: 2,
      backgroundColor: this.chartBGColor[1],
      borderColor: this.chartBorderColor[1],
      data: [22.1, 22.8, 23.2, 23.1, 22.6, 23.7, 24.1],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 02',
      co2Name: 'CO\u2082 Sensor 02',
      humidityName: 'Humidity Sensor 05',
    }, {
      id: 3,
      name: 'Temp. Sensor 03',
      type: 'temp',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 3,
      humidityID: 6,
      co2ID: 3,
      backgroundColor: this.chartBGColor[2],
      borderColor: this.chartBorderColor[2],
      data: [24.5, 24.8, 25.2, 24.7, 23.2, 23.7, 23.9],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 03',
      co2Name: 'CO\u2082 Sensor 03',
      humidityName: 'Humidity Sensor 06',
    }, {
      id: 4,
      name: 'Temp. Sensor 04',
      type: 'temp',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 4,
      humidityID: 1,
      co2ID: 4,
      backgroundColor: this.chartBGColor[3],
      borderColor: this.chartBorderColor[3],
      data: [23.0, 22.8, 21.8, 21.9, 22.2, 22.7, 21.9],
      zoneName: 'Building Zone B',
      tempName: 'Temp. Sensor 04',
      co2Name: 'CO\u2082 Sensor 04',
      humidityName: 'Humidity Sensor 01',
    }, {
      id: 5,
      name: 'Temp. Sensor 05',
      type: 'temp',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 5,
      humidityID: 2,
      co2ID: 5,
      backgroundColor: this.chartBGColor[4],
      borderColor: this.chartBorderColor[4],
      data: [21.1, 21.8, 21.2, 22.1, 21.4, 22.4, 21.9],
      zoneName: 'Building Zone B',
      tempName: 'Temp. Sensor 05',
      co2Name: 'CO\u2082 Sensor 05',
      humidityName: 'Humidity Sensor 02',
    }, {
      id: 6,
      name: 'Temp. Sensor 06',
      type: 'temp',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 6,
      humidityID: 3,
      co2ID: 6,
      backgroundColor: this.chartBGColor[5],
      borderColor: this.chartBorderColor[5],
      data: [24.5, 24.8, 25.2, 24.5, 24.2, 23.7, 23.9],
      zoneName: 'Building Zone B',
      tempName: 'Temp. Sensor 06',
      co2Name: 'CO\u2082 Sensor 06',
      humidityName: 'Humidity Sensor 03',
    }, {
      id: 7,
      name: 'Temp. Sensor 07',
      type: 'temp',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 7,
      humidityID: 0,
      co2ID: 0,
      backgroundColor: this.chartBGColor[6],
      borderColor: this.chartBorderColor[6],
      data: [23.1, 23.5, 23.4, 23.6, 23.8, 23.1, 23.7],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 07',
      co2Name: '',
      humidityName: '',
    }, {
      id: 8,
      name: 'Temp. Sensor 08',
      type: 'temp',
      zoneID: 'c',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 8,
      humidityID: 0,
      co2ID: 0,
      backgroundColor: this.chartBGColor[7],
      borderColor: this.chartBorderColor[7],
      data: [23.8, 23.6, 23.1, 23.5, 23.9, 23.4, 23.1],
      zoneName: 'Building Zone C',
      tempName: 'Temp. Sensor 08',
      co2Name: '',
      humidityName: '',
    }, {
      id: 9,
      name: 'Temp. Sensor 09',
      type: 'temp',
      zoneID: 'c',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 9,
      humidityID: 0,
      co2ID: 0,
      backgroundColor: this.chartBGColor[8],
      borderColor: this.chartBorderColor[8],
      data: [25.3, 24.6, 24.1, 24.3, 24.1, 24.9, 25.3],
      zoneName: 'Building Zone C',
      tempName: 'Temp. Sensor 09',
      co2Name: '',
      humidityName: '',
    }, {
      id: 10,
      name: 'Temp. Sensor 10',
      type: 'temp',
      zoneID: 'c',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 10,
      humidityID: 0,
      co2ID: 0,
      backgroundColor: this.chartBGColor[9],
      borderColor: this.chartBorderColor[9],
      data: [23, 22.4, 23.6, 22.9, 22.5, 23.1, 22.9],
      zoneName: 'Building Zone C',
      tempName: 'Temp. Sensor 10',
      co2Name: '',
      humidityName: '',
    }, {
      id: 11,
      name: 'Temp. Sensor 11',
      type: 'temp',
      zoneID: 'd',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 11,
      humidityID: 0,
      co2ID: 0,
      backgroundColor: this.chartBGColor[10],
      borderColor: this.chartBorderColor[10],
      data: [21.9, 22, 21.6, 22.3, 21.4, 22.8, 22.1],
      zoneName: 'Building Zone D',
      tempName: 'Temp. Sensor 11',
      co2Name: '',
      humidityName: '',
    }, {
      id: 12,
      name: 'Temp. Sensor 12',
      type: 'temp',
      zoneID: 'd',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 12,
      humidityID: 0,
      co2ID: 0,
      backgroundColor: this.chartBGColor[11],
      borderColor: this.chartBorderColor[12],
      data: [20.2, 20.8, 20.6, 20.7, 21, 20.6, 21.2],
      zoneName: 'Building Zone D',
      tempName: 'Temp. Sensor 12',
      co2Name: '',
      humidityName: '',
    }]

    // ======= Data From Backend =======
    this.mockupHumiditySensorsData = [{
      id: 1,
      name: 'Humidity Sensor 01',
      type: 'humidity',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 4,
      humidityID: 1,
      co2ID: 4,
      backgroundColor: this.chartBGColor[12],
      borderColor: this.chartBorderColor[12],
      data: [78, 68, 73, 70, 65, 64, 60],
      zoneName: 'Building Zone D',
      tempName: 'Temp. Sensor 04',
      co2Name: 'CO\u2082 Sensor 04',
      humidityName: 'Humidity Sensor 01',
    }, {
      id: 2,
      name: 'Humidity Sensor 02',
      type: 'humidity',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 5,
      humidityID: 2,
      co2ID: 5,
      backgroundColor: this.chartBGColor[13],
      borderColor: this.chartBorderColor[13],
      data: [83, 85, 76, 72, 68, 62, 65],
      zoneName: 'Building Zone D',
      tempName: 'Temp. Sensor 05',
      co2Name: 'CO\u2082 Sensor 05',
      humidityName: 'Humidity Sensor 02',
    }, {
      id: 3,
      name: 'Humidity Sensor 03',
      type: 'humidity',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 6,
      humidityID: 3,
      co2ID: 6,
      backgroundColor: this.chartBGColor[14],
      borderColor: this.chartBorderColor[14],
      data: [68, 72, 65, 69, 66, 61, 63],
      zoneName: 'Building Zone D',
      tempName: 'Temp. Sensor 06',
      co2Name: 'CO\u2082 Sensor 06',
      humidityName: 'Humidity Sensor 03',
    }, {
      id: 4,
      name: 'Humidity Sensor 04',
      type: 'humidity',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 1,
      humidityID: 4,
      co2ID: 1,
      backgroundColor: this.chartBGColor[15],
      borderColor: this.chartBorderColor[15],
      data: [54, 59, 56, 51, 48, 42, 45],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 01',
      co2Name: 'CO\u2082 Sensor 01',
      humidityName: 'Humidity Sensor 04',
    }, {
      id: 5,
      name: 'Humidity Sensor 05',
      type: 'humidity',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 2,
      humidityID: 5,
      co2ID: 2,
      backgroundColor: this.chartBGColor[16],
      borderColor: this.chartBorderColor[16],
      data: [67, 62, 59, 61, 57, 50, 54],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 02',
      co2Name: 'CO\u2082 Sensor 02',
      humidityName: 'Humidity Sensor 05',
    }, {
      id: 6,
      name: 'Humidity Sensor 06',
      type: 'humidity',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 3,
      humidityID: 6,
      co2ID: 3,
      backgroundColor: this.chartBGColor[17],
      borderColor: this.chartBorderColor[17],
      data: [48, 45, 51, 47, 53, 50, 49],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 03',
      co2Name: 'CO\u2082 Sensor 03',
      humidityName: 'Humidity Sensor 06',
    }];

    // ======= Data From Backend =======
    this.mockupCO2SensorsData = [{
      id: 1,
      name: 'CO\u2082 Sensor 01',
      type: 'co2',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 1,
      humidityID: 4,
      co2ID: 1,
      backgroundColor: this.chartBGColor[7],
      borderColor: this.chartBorderColor[7],
      data: [78, 68, 73, 70, 65, 64, 60],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 01',
      co2Name: 'CO\u2082 Sensor 01',
      humidityName: 'Humidity Sensor 06',
    }, {
      id: 2,
      name: 'CO\u2082 Sensor 02',
      type: 'co2',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 2,
      humidityID: 5,
      co2ID: 2,
      backgroundColor: this.chartBGColor[8],
      borderColor: this.chartBorderColor[8],
      data: [83, 85, 76, 72, 68, 62, 65],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 02',
      co2Name: 'CO\u2082 Sensor 02',
      humidityName: 'Humidity Sensor 06',
    }, {
      id: 3,
      name: 'CO\u2082 Sensor 03',
      type: 'co2',
      zoneID: 'a',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 3,
      humidityID: 6,
      co2ID: 3,
      backgroundColor: this.chartBGColor[9],
      borderColor: this.chartBorderColor[9],
      data: [68, 72, 65, 69, 66, 61, 63],
      zoneName: 'Building Zone A',
      tempName: 'Temp. Sensor 03',
      co2Name: 'CO\u2082 Sensor 03',
      humidityName: 'Humidity Sensor 06',
    }, {
      id: 4,
      name: 'CO\u2082 Sensor 04',
      type: 'co2',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 4,
      humidityID: 1,
      co2ID: 4,
      backgroundColor: this.chartBGColor[10],
      borderColor: this.chartBorderColor[10],
      data: [54, 59, 56, 51, 48, 42, 45],
      zoneName: 'Building Zone B',
      tempName: 'Temp. Sensor 04',
      co2Name: 'CO\u2082 Sensor 04',
      humidityName: 'Humidity Sensor 01',
    }, {
      id: 5,
      name: 'CO\u2082 Sensor 05',
      type: 'co2',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 5,
      humidityID: 2,
      co2ID: 5,
      backgroundColor: this.chartBGColor[11],
      borderColor: this.chartBorderColor[11],
      data: [67, 62, 59, 61, 57, 50, 54],
      zoneName: 'Building Zone B',
      tempName: 'Temp. Sensor 05',
      co2Name: 'CO\u2082 Sensor 05',
      humidityName: 'Humidity Sensor 02',
    }, {
      id: 6,
      name: 'CO\u2082 Sensor 06',
      type: 'co2',
      zoneID: 'b',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      tempID: 6,
      humidityID: 3,
      co2ID: 6,
      backgroundColor: this.chartBGColor[12],
      borderColor: this.chartBorderColor[12],
      data: [48, 45, 51, 47, 53, 50, 49],
      zoneName: 'Building Zone B',
      tempName: 'Temp. Sensor 06',
      co2Name: 'CO\u2082 Sensor 06',
      humidityName: 'Humidity Sensor 03',
    }];

    this.sensorTempDataList = this.insertData(this.mockupTempSensorsData);
  }

  insertData(dataArray) {
    let sensorData = [];
    for (var key in dataArray) {
      var dataObj = dataArray[key];
      dataObj.dataCurrent = this.getLastData(dataObj.data);
      sensorData.push(dataObj);
    }
    return sensorData
  }

  getLastData(data) {
    var dataLength = data.length - 1;
    var currentData = data[dataLength];
    return currentData;
  }

  onClickButt(viewSet) {
    console.log(viewSet);
    if (viewSet == 'single') {
      this.selectionViewType = 'single';
      // var x = document.getElementById("singleViewSet");
      // x.disabled = true;
      (document.getElementById('singleViewSet') as HTMLButtonElement).disabled = true;
      (document.getElementById('typeViewSet') as HTMLButtonElement).disabled = false;
    } else if (viewSet == 'all') {
      this.selectionViewType = 'all';
      (document.getElementById('typeViewSet') as HTMLButtonElement).disabled = true;
      (document.getElementById('singleViewSet') as HTMLButtonElement).disabled = false;
    } else {
      this.selectionViewType = 'single';
      (document.getElementById('singleViewSet') as HTMLButtonElement).disabled = true;
      (document.getElementById('typeViewSet') as HTMLButtonElement).disabled = false;
    }
  }

}
