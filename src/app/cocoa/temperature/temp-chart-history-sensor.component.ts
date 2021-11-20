import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-chart-history-sensor',
  templateUrl: './temp-chart-history-sensor.component.html',
  styleUrls: ['./temp-chart-history-sensor.component.scss']
})
export class TempChartHistorySensorComponent implements OnInit {

  @Input()
  selectionViewType: string = 'all';

  selectedZoneViewID: string = 'a';

  weekDay: any[];
  chartBGColor: any[];
  chartBorderColor: any[];
  dateLists: any[];

  dataChartTemp01: any;
  dataChartTemp02: any;
  dataChartTemp03: any;
  dataChartTemp04: any;
  dataChartTemp05: any;
  dataChartTemp06: any;

  datatemp01: any;
  datatemp02: any;
  datatemp03: any;
  datatemp04: any;
  datatemp05: any;
  datatemp06: any;

  tempChartHistoryData: any;
  optionsLineChartHistoryTemp: any;

  constructor() { }

  ngOnInit(): void {

    this.weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdays', 'Sunday'];

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
      'rgba(102, 0, 51, 0.4)',
      'rgba(51, 0, 102, 0.4)',
      'rgba(102, 0, 51, 0.4)',
      'rgba(0, 51, 102, 0.4)',
      'rgba(32, 32, 32, 0.4)',
      'rgba(192, 192, 192, 0.4)',
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
      'rgba(102, 0, 51, 0.5)',
      'rgba(51, 0, 102, 0.5)',
      'rgba(102, 0, 51, 0.5)',
      'rgba(0, 51, 102, 0.5)',
      'rgba(32, 32, 32, 0.5)',
      'rgba(192, 192, 192, 0.5)',
    ];

    this.dateLists = [
      { date: 'Default', code: 1 },
      { date: 'Hours', code: 2 },
      { date: 'Days', code: 3 },
      { date: 'Weeks', code: 4 },
      { date: 'Month', code: 5 },
      { date: 'Years', code: 6 }
    ];

    // Temp Data 
    let tempDataset01 = {
      label: 'Temp. Sensor 01 [°C]',
      backgroundColor: this.chartBGColor[0],
      borderColor: this.chartBorderColor[0],
      data: [23.5, 24.8, 25.2, 23.1, 22.2, 23.7, 22.9],
      fill: false,
      tension: 0,
      yAxisID: 'left-y-axis'
    }

    let tempDataset02 = {
      label: 'Temp. Sensor 02 [°C]',
      backgroundColor: this.chartBGColor[1],
      borderColor: this.chartBorderColor[1],
      data: [22.1, 22.8, 23.2, 23.1, 22.6, 23.7, 24.1],
      fill: false,
      tension: 0,
      yAxisID: 'left-y-axis'
    }

    let tempDataset03 = {
      label: 'Temp. Sensor 03 [°C]',
      backgroundColor: this.chartBGColor[2],
      borderColor: this.chartBorderColor[2],
      data: [24.5, 24.8, 25.2, 24.7, 23.2, 23.7, 23.9],
      fill: false,
      tension: 0,
      yAxisID: 'left-y-axis'
    }

    let tempDataset04 = {
      label: 'Temp. Sensor 04 [°C]',
      backgroundColor: this.chartBGColor[3],
      borderColor: this.chartBorderColor[3],
      data: [23.0, 22.8, 21.8, 21.9, 22.2, 22.7, 21.9],
      fill: false,
      tension: 0,
      yAxisID: 'left-y-axis'
    }

    let tempDataset05 = {
      label: 'Temp. Sensor 05 [°C]',
      backgroundColor: this.chartBGColor[4],
      borderColor: this.chartBorderColor[4],
      data: [21.1, 21.8, 21.2, 22.1, 21.4, 22.4, 21.9],
      fill: false,
      tension: 0,
      yAxisID: 'left-y-axis'
    }

    let tempDataset06 = {
      label: 'Temp. Sensor 06 [°C]',
      backgroundColor: this.chartBGColor[5],
      borderColor: this.chartBorderColor[5],
      data: [24.5, 24.8, 25.2, 24.5, 24.2, 23.7, 23.9],
      fill: false,
      tension: 0,
      yAxisID: 'left-y-axis'
    }

    // ============== ONE Chart Data 
    this.dataChartTemp01 = {
      labels: this.weekDay,
      datasets: [
        tempDataset01
      ]
    };
    this.dataChartTemp02 = {
      labels: this.weekDay,
      datasets: [
        tempDataset02
      ]
    };
    this.dataChartTemp03 = {
      labels: this.weekDay,
      datasets: [
        tempDataset03
      ]
    };
    this.dataChartTemp04 = {
      labels: this.weekDay,
      datasets: [
        tempDataset04
      ]
    };
    this.dataChartTemp05 = {
      labels: this.weekDay,
      datasets: [
        tempDataset05
      ]
    };
    this.dataChartTemp06 = {
      labels: this.weekDay,
      datasets: [
        tempDataset06
      ]
    };

    // ITEM Chart Data For Loop Render
    this.datatemp01 = {
      id: 1,
      name: 'Temp. Sensor 01',
      zoneID: 'a',
      zoneName: 'Building Zone A',
      sensorHumidID: 1,
      sensorHumidName: 'Humidity Sensor 01',
      sensorCOID: 1,
      sensorCOName: 'CO\u2082 Sensor 01',
      chartColor: 'rgba(255, 99, 132, 0.5)',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      data: this.dataChartTemp01,
      dataHumidity: [],
      dataCO: [],
      dataCurrent: this.getLastData(this.dataChartTemp01)
    };

    this.datatemp02 = {
      id: 2,
      name: 'Temp. Sensor 02',
      zoneID: 'b',
      zoneName: 'Building Zone B',
      sensorHumidID: 2,
      sensorHumidName: 'Humidity Sensor 02',
      sensorCOID: 3,
      sensorCOName: 'CO\u2082 Sensor 03',
      chartColor: 'rgba(255, 159, 64, 0.5)',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      data: this.dataChartTemp02,
      dataHumidity: [],
      dataCO: [],
      dataCurrent: this.getLastData(this.dataChartTemp02)
    };

    this.datatemp03 = {
      id: 3,
      name: 'Temp. Sensor 03',
      zoneID: 'a',
      zoneName: 'Building Zone A',
      sensorHumidID: 3,
      sensorHumidName: 'Humidity Sensor 03',
      sensorCOID: 2,
      sensorCOName: 'CO\u2082 Sensor 02',
      chartColor: 'rgba(255, 205, 86, 0.5)',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      data: this.dataChartTemp03,
      dataHumidity: [],
      dataCO: [],
      dataCurrent: this.getLastData(this.dataChartTemp03)
    };

    this.datatemp04 = {
      id: 4,
      name: 'Temp. Sensor 04',
      zoneID: 'a',
      zoneName: 'Building Zone A',
      sensorHumidID: 4,
      sensorHumidName: 'Humidity Sensor 04',
      sensorCOID: 4,
      sensorCOName: 'CO\u2082 Sensor 04',
      chartColor: 'rgba(255, 205, 86, 0.5)',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      data: this.dataChartTemp04,
      dataHumidity: [],
      dataCO: [],
      dataCurrent: this.getLastData(this.dataChartTemp04)
    };

    this.datatemp05 = {
      id: 5,
      name: 'Temp. Sensor 05',
      zoneID: 'b',
      zoneName: 'Building Zone B',
      sensorHumidID: 5,
      sensorHumidName: 'Humidity Sensor 05',
      sensorCOID: 5,
      sensorCOName: 'CO\u2082 Sensor 05',
      chartColor: 'rgba(255, 205, 86, 0.5)',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      data: this.dataChartTemp05,
      dataHumidity: [],
      dataCO: [],
      dataCurrent: this.getLastData(this.dataChartTemp05)
    };

    this.datatemp06 = {
      id: 6,
      name: 'Temp. Sensor 06',
      zoneID: 'a',
      zoneName: 'Building Zone A',
      sensorHumidID: 6,
      sensorHumidName: 'Humidity Sensor 06',
      sensorCOID: 6,
      sensorCOName: 'CO\u2082 Sensor 06',
      chartColor: 'rgba(255, 205, 86, 0.5)',
      chartMiniShow: true,
      chartShow: true,
      check: [1],
      data: this.dataChartTemp06,
      dataHumidity: [],
      dataCO: [],
      dataCurrent: this.getLastData(this.dataChartTemp06)
    };



    this.tempChartHistoryData = [{
      type: 'temp',
      typeChartName: 'Temperature Sensors History.',
      check: [1],
      chartShow: true,
      dataSensors: [{
        zoneID: 'a',
        zoneName: 'Building Zone A',
        data: {
          labels: this.weekDay,
          datasets: [{
            label: 'Temp. Sensor 01 [°C]',
            backgroundColor: this.chartBGColor[0],
            borderColor: this.chartBorderColor[0],
            data: [23.5, 24.8, 25.2, 23.1, 22.2, 23.7, 22.9],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }, {
            label: 'Temp. Sensor 03 [°C]',
            backgroundColor: this.chartBGColor[2],
            borderColor: this.chartBorderColor[2],
            data: [24.5, 24.8, 25.2, 24.7, 23.2, 23.7, 23.9],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }, {
            label: 'Temp. Sensor 04 [°C]',
            backgroundColor: this.chartBGColor[3],
            borderColor: this.chartBorderColor[3],
            data: [23.0, 22.8, 21.8, 21.9, 22.2, 22.7, 21.9],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }, {
            label: 'Temp. Sensor 06 [°C]',
            backgroundColor: this.chartBGColor[5],
            borderColor: this.chartBorderColor[5],
            data: [24.5, 24.8, 25.2, 24.5, 24.2, 23.7, 23.9],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }]
        }
      }, {
        zoneID: 'b',
        zoneName: 'Building Zone B',
        data: {
          labels: this.weekDay,
          datasets: [{
            label: 'Temp. Sensor 02 [°C]',
            backgroundColor: this.chartBGColor[1],
            borderColor: this.chartBorderColor[1],
            data: [22.1, 22.8, 23.2, 23.1, 22.6, 23.7, 24.1],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }, {
            label: 'Temp. Sensor 05 [°C]',
            backgroundColor: this.chartBGColor[4],
            borderColor: this.chartBorderColor[4],
            data: [21.1, 21.8, 21.2, 22.1, 21.4, 22.4, 21.9],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }]
        }
      }, {
        zoneID: 'c',
        zoneName: 'Building Zone C',
        data: {
          labels: this.weekDay,
          datasets: [{
            label: 'Temp. Sensor 07 [°C]',
            backgroundColor: this.chartBGColor[5],
            borderColor: this.chartBorderColor[5],
            data: [22.1, 22.8, 23.2, 23.1, 22.6, 23.7, 24.1],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }, {
            label: 'Temp. Sensor 08 [°C]',
            backgroundColor: this.chartBGColor[6],
            borderColor: this.chartBorderColor[6],
            data: [21.1, 21.8, 21.2, 22.1, 21.4, 22.4, 21.9],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }, {
            label: 'Temp. Sensor 09 [°C]',
            backgroundColor: this.chartBGColor[0],
            borderColor: this.chartBorderColor[0],
            data: [23, 22.5, 22.8, 23.6, 23.1, 22.9, 22.4],
            fill: false,
            tension: 0,
            yAxisID: 'left-y-axis'
          }]
        }
      }]
    }]

    this.optionsLineChartHistoryTemp = {
      type: 'line',
      legend: {
        display: true,
        responsive: true,
      },
      scales: {
        yAxes: [{
          id: 'left-y-axis',
          type: 'linear',
          position: 'left',
          display: true,
          ticks: {
            suggestedMin: 22,
            suggestedMax: 25
          },
          scaleLabel: {
            display: true,
            labelString: 'Temperature [°C]'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#515C66'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
      }
    };


  }

  getLastData(data) {
    var dataLength = data.datasets[0].data.length - 1
    var currentData = data.datasets[0].data[dataLength]
    // console.log(data.datasets[0].data[dataLength]);
    return currentData;
  }

  getSelectedZone($event: any, zoneID, type) {
    console.log(zoneID);

    if ($event.target.tagName == "SPAN") {
      let button = $event.target.parentElement.parentElement.parentElement.getElementsByClassName("button-grid");
      for (var i = 0; i < button.length; i++) {
        button[i].disabled = false;
        if ((i + 1) == button.length) {
          $event.target.parentElement.disabled = true;
        }
      }
    } else {
      let button = $event.target.parentElement.parentElement.getElementsByClassName("button-grid");
      for (var i = 0; i < button.length; i++) {
        button[i].disabled = false;
        if ((i + 1) == button.length) {
          $event.target.disabled = true;
        }
      }
    }

    if (zoneID != this.selectedZoneViewID) {
      this.selectedZoneViewID = zoneID;
    }
  }

}
