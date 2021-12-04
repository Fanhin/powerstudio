import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { PowerService } from '../service/power.service';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {

  //power on site data
  powerUsageToday: any;
  peaValue: any;
  solarCellValue: any;

  voltageToday: any;
  voltageYesterday: any;


  inverter1Value: any;
  inverter2Value: any;
  inverter3Value: any;

  solarPowerProducingToday: any;

  mdb1Value: any;
  mdb2Value: any;
  mdb3Value: any;
  mdb4Value: any;
  mdb5Value: any;

  peaPowerProducingToday: any;

  powerConsumptionHistory: any;

  ///////////////lastes
  MEA24hr:any[];
  Solar24hr:any[];

  inverter1_24hr:any[];
  inverter2_24hr:any[];
  inverter3_24hr:any[];

  mdb1_24hr:any[];
  mdb2_24hr:any[];
  mdb3_24hr:any[];
  mdb4_24hr:any[];
  mdb5_24hr:any[];

  allPower24hr:any[];


  constructor(
    private breadcrumbService: AppBreadcrumbService, private powerService: PowerService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Power on Site ', routerLink: ['/power'] }
    ]);
  }

  ngOnInit(): void {

    this.powerService.getPowerUsageToday().subscribe(powerUsageToday => {
      this.powerUsageToday = powerUsageToday;
    })

    this.powerService.getPEAValue().subscribe(peaValue => {
      this.peaValue = peaValue;
    })

    this.powerService.getSolarCellValue().subscribe(solarCellValue => {
      this.solarCellValue = solarCellValue;
    })

    this.powerService.getInverter1Value().subscribe(inverter1Value => {
      this.inverter1Value = inverter1Value;
    })

    this.powerService.getInverter2Value().subscribe(inverter2Value => {
      this.inverter2Value = inverter2Value;
    })

    this.powerService.getInverter3Value().subscribe(inverter3Value => {
      this.inverter3Value = inverter3Value;
    })

    this.powerService.getMDB1Value().subscribe(mdb1Value => {
      this.mdb1Value = mdb1Value;
    })

    this.powerService.getMDB2Value().subscribe(mdb2Value => {
      this.mdb2Value = mdb2Value;
    })

    this.powerService.getMDB3Value().subscribe(mdb3Value => {
      this.mdb3Value = mdb3Value;
    })

    this.powerService.getMDB4Value().subscribe(mdb4Value => {
      this.mdb4Value = mdb4Value;
    })


    this.powerService.getMDB5Value().subscribe(mdb5Value => {
      this.mdb5Value = mdb5Value;
    })








  }

}
