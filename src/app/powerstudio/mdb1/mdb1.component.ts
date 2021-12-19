import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb1',
  templateUrl: './mdb1.component.html',
  styleUrls: ['./mdb1.component.scss']
})
export class Mdb1Component implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
