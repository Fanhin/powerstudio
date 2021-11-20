import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-humidity-chart-sensor',
  templateUrl: './humidity-chart-sensor.component.html',
  styleUrls: ['./humidity-chart-sensor.component.scss']
})
export class HumidityChartSensorComponent implements OnInit {

  @Input() selectionViewType: string = '';
  @Input() componentType: string = '';

  @Input() mockupZoneData: Object = {};
  @Input() mockupTempSensorsData: Object = {};
  @Input() mockupHumiditySensorsData: Object = {};
  @Input() mockupCO2SensorsData: Object = {};

  @Input() sensorHumidityDataList: Object = {};

  @Input() dateLists: object = [];
  @Input() weekDay: object = [];
  @Input() chartBGColor: object = [];
  @Input() chartBorderColor: object = [];

  optionsLineChartHumidity: Object = {};
  optionsLineChartHumidityTemp: Object = {};
  optionsLineChartHumidityCO2: Object = {};

  constructor() { }

  ngOnInit(): void {

    this.insertChartSensorData(this.mockupHumiditySensorsData);

    // Option Line Chart
    this.optionsLineChartHumidity = {
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
          scaleLabel: {
            display: true,
            labelString: 'Humidity [%RH]'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#A0A7B5'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
      }
    };

    this.optionsLineChartHumidityTemp = {
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
          scaleLabel: {
            display: true,
            labelString: 'Humidity [%RH]'
          }
        }, {
          id: 'right-y-axis',
          type: 'linear',
          position: 'right',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Temperature [°C]'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#A0A7B5'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
      }
    };

    this.optionsLineChartHumidityCO2 = {
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
          scaleLabel: {
            display: true,
            labelString: 'Humidity [%RH]'
          }
        }, {
          id: 'right-y-axis',
          type: 'linear',
          position: 'right',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'CO2-concentration [ppm]'
          }
        },],
        xAxes: [{
          ticks: {
            fontColor: '#A0A7B5'
          },
          gridLines: {
            color: 'rgba(160, 167, 181, .3)',
          }
        }],
      }
    }
    console.log(this.mockupHumiditySensorsData);
    console.log(this.sensorHumidityDataList);
  }

  insertChartSensorData(dataArray) {
    let sensorData = [];
    for (var key in dataArray) {
      var dataObj = dataArray[key];
      dataObj['chartData'] = this.createChartDataArray(dataObj, 0);
      dataObj['chartHumidityTemp'] = {};
      dataObj['chartHumidityCO2'] = {};

      let tempData = {};
      let co2Data = {};
      tempData = this.getSensorDataFromID('temp', dataObj.tempID);
      co2Data = this.getSensorDataFromID('co2', dataObj.co2ID);

      if (tempData['id']) {
        dataObj['chartHumidityTemp'] = this.createChartDataArray(dataObj, tempData);
      }
      if (co2Data['id']) {
        dataObj['chartHumidityCO2'] = this.createChartDataArray(dataObj, co2Data);
      }
    }
    return sensorData
  }

  getSensorDataFromID(type, ID) {
    var dataList = {};
    if (ID) {
      if (type == 'temp') {
        dataList = this.mockupTempSensorsData;
      } else if (type == 'humidity') {
        dataList = this.mockupHumiditySensorsData;
      } else if (type == 'co2') {
        dataList = this.mockupCO2SensorsData;
      }

      for (var key in dataList) {
        let obj = dataList[key];
        if (obj.id == ID) {
          return obj
        }
      }
    } else {
      return {}
    }
  }

  createChartDataArray(mainSensor, compareSensor) {
    let chartData: Object = {};

    function getLabel(data) {
      let newLabel = '';
      if (data.type == 'temp') {
        newLabel = data.name + ' [°C]';
      } else if (data.type == 'humidity') {
        newLabel = data.name + ' [%RH]';
      } else if (data.type == 'co2') {
        newLabel = data.name + ' [ppm]';
      } else {
        newLabel = data.name;
      }
      return newLabel
    }

    chartData = {
      labels: this.weekDay,
      datasets: [{
        yAxisID: 'left-y-axis',
        backgroundColor: mainSensor.backgroundColor,
        borderColor: mainSensor.borderColor,
        data: mainSensor.data,
        fill: false,
        tension: 0,
        label: getLabel(mainSensor)
      }]
    }

    if (compareSensor.id) {
      chartData['datasets'].push({
        yAxisID: 'right-y-axis',
        backgroundColor: compareSensor.backgroundColor,
        borderColor: compareSensor.borderColor,
        data: compareSensor.data,
        fill: false,
        tension: 0,
        label: getLabel(compareSensor)
      })
    }
    return chartData;
  }

}
