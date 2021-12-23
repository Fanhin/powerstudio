import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mdb4Service } from '../service/mdb4.service';

@Component({
  selector: 'app-mdb4',
  templateUrl: './mdb4.component.html',
  styleUrls: ['./mdb4.component.scss']
})
export class Mdb4Component implements OnInit {

  powerFactor:any;
  frequency:any;

  vAB:any;
  vAC:any;
  vBC:any;
  vAL:any;
  vBL:any;
  vCL:any;

  currentA:any;
  currentB:any;
  currentC:any;

  THDvA:any;
  THDvB:any;
  THDvC:any;
  THDiA:any;
  THDiB:any;
  THDiC:any;

  temp: any;
  hum: any;
  smokeStatus: any;

  getMDB4InfoSub: Subscription;
  get3EventSub: Subscription;

  constructor(private mdb4Service: Mdb4Service) { }

  ngOnDestroy() {
    this.getMDB4InfoSub.unsubscribe();
    this.get3EventSub.unsubscribe();

  }

  ngOnInit(): void {

    this.mdb4Service.getMDB4Info().subscribe((data:any) => {
      this.powerFactor = data["powerFactor"].toFixed(2);
      this.frequency = data["frequency"].toFixed(2);

      this.vAB = data["vAB"].toFixed(2);
      this.vAC = data["vAC"].toFixed(2);
      this.vBC = data["vBC"].toFixed(2);
      this.vAL = data["vAL"].toFixed(2);
      this.vBL = data["vBL"].toFixed(2);
      this.vCL = data["vCL"].toFixed(2);

      this.currentA = data["currentA"].toFixed(2);
      this.currentB = data["currentB"].toFixed(2);
      this.currentC = data["currentC"].toFixed(2);

      this.THDvA = data["THDvA"].toFixed(2);
      this.THDvB = data["THDvB"].toFixed(2);
      this.THDvC = data["THDvC"].toFixed(2);
      this.THDiA = data["THDiA"].toFixed(2);
      this.THDiB = data["THDiB"].toFixed(2);
      this.THDiC = data["THDiC"].toFixed(2);

      this.temp = data["temp"].toFixed(2);
      this.hum = data["hum"].toFixed(2);
      this.smokeStatus = data["smokeStatus"].toFixed(2);
   

    })

    this.get3EventSub = this.mdb4Service.get3Event().subscribe((data: any) => {
      this.temp = data["temperature"].toFixed(2);
      this.hum = data["humidity"].toFixed(2);
      this.smokeStatus = data["smokeStatus"];
    })

    
  }

}
