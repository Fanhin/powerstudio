import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-chart-sensor',
  templateUrl: './temp-chart-sensor.component.html',
  styleUrls: ['./temp-chart-sensor.component.scss']
})
export class TempChartSensorComponent implements OnInit {

  @Input() selectionViewType: string = '';
  @Input() componentType: string = '';

  @Input() mockupZoneData: Object = {};
  @Input() mockupTempSensorsData: Object = {};
  @Input() mockupHumiditySensorsData: Object = {};
  @Input() mockupCO2SensorsData: Object = {};

  @Input() sensorTempDataList: Object = {};

  @Input() dateLists: object = [];
  @Input() weekDay: object = [];
  @Input() chartBGColor: object = [];
  @Input() chartBorderColor: object = [];

  optionsLineChartTemp: Object = {};
  optionsLineChartTempHumidity: Object = {};
  optionsLineChartTempCO2: Object = {};

  constructor() { }

  ngOnInit(): void {

    this.insertChartSensorData(this.mockupTempSensorsData);

    // Option Line Chart
    this.optionsLineChartTemp = {
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

    this.optionsLineChartTempHumidity = {
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
            labelString: 'Temperature [°C]'
          }
        }, {
          id: 'right-y-axis',
          type: 'linear',
          position: 'right',
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

    this.optionsLineChartTempCO2 = {
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
            labelString: 'Temperature [°C]'
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

    console.log(this.mockupTempSensorsData);
    console.log(this.sensorTempDataList);

  }

  insertChartSensorData(dataArray) {
    let sensorData = [];
    for (var key in dataArray) {
      var dataObj = dataArray[key];

      //=== Check for type and data object
      dataObj['chartData'] = this.createChartDataArray(dataObj, 0);
      dataObj['chartTempHumidity'] = {};
      dataObj['chartTempCO2'] = {};

      let humidityData = {};
      let co2Data = {};
      humidityData = this.getSensorDataFromID('humidity', dataObj.humidityID);
      co2Data = this.getSensorDataFromID('co2', dataObj.co2ID);

      if (humidityData['id']) {
        dataObj['chartTempHumidity'] = this.createChartDataArray(dataObj, humidityData);
      }
      if (co2Data['id']) {
        dataObj['chartTempCO2'] = this.createChartDataArray(dataObj, co2Data);
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
