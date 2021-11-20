import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-co2-chart-sensor',
  templateUrl: './co2-chart-sensor.component.html',
  styleUrls: ['./co2-chart-sensor.component.scss']
})
export class Co2ChartSensorComponent implements OnInit {

  @Input() selectionViewType: string = '';
  @Input() componentType: string = '';

  @Input() mockupZoneData: Object = {};
  @Input() mockupTempSensorsData: Object = {};
  @Input() mockupHumiditySensorsData: Object = {};
  @Input() mockupCO2SensorsData: Object = {};

  @Input() sensorCO2DataList: Object = {};

  @Input() dateLists: object = [];
  @Input() weekDay: object = [];
  @Input() chartBGColor: object = [];
  @Input() chartBorderColor: object = [];

  optionsLineChartCO2: Object = {};
  optionsLineChartCO2Temp: Object = {};
  optionsLineChartCO2Humidity: Object = {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.componentType);
    this.insertChartSensorData(this.mockupCO2SensorsData);

    // Option Line Chart
    this.optionsLineChartCO2 = {
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
            labelString: 'CO2-concentration [ppm]'
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

    this.optionsLineChartCO2Temp = {
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
            labelString: 'CO2-concentration [ppm]'
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

    this.optionsLineChartCO2Humidity = {
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
            labelString: 'CO2-concentration [ppm]'
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

    console.log(this.mockupCO2SensorsData);
    console.log(this.sensorCO2DataList);

  }

  insertChartSensorData(dataArray) {
    let sensorData = [];
    for (var key in dataArray) {
      var dataObj = dataArray[key];

      //=== Check for type and data object
      dataObj['chartData'] = this.createChartDataArray(dataObj, 0);
      dataObj['chartCO2Temp'] = {};
      dataObj['chartCO2Humidity'] = {};

      let tempData = {};
      let humidityData = {};
      tempData = this.getSensorDataFromID('temp', dataObj.tempID);
      humidityData = this.getSensorDataFromID('humidity', dataObj.humidityID);

      if (tempData['id']) {
        dataObj['chartCO2Temp'] = this.createChartDataArray(dataObj, tempData);
      }
      if (humidityData['id']) {
        dataObj['chartCO2Humidity'] = this.createChartDataArray(dataObj, humidityData);
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
