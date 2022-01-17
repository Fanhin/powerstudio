import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { Mdb3Service } from '../service/mdb3.service';

@Component({
  selector: 'app-mdb3',
  templateUrl: './mdb3.component.html',
  styleUrls: ['./mdb3.component.scss']
})
export class Mdb3Component implements OnInit {

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

  getMDB3InfoSub: Subscription;
  get3EventSub: Subscription;


  constructor(private mdb3Service: Mdb3Service,private breadcrumbService: AppBreadcrumbService) { this.breadcrumbService.setItems([
    { label: 'Power Studio' },
    { label: 'MDB3', routerLink: ['/MDB3'] }
  ]);}

  ngOnDestroy() {
    this.getMDB3InfoSub.unsubscribe();
    this.get3EventSub.unsubscribe();

  }

  ngOnInit(): void {

    this.getMDB3InfoSub = this.mdb3Service.getMDB3Info().subscribe((data:any) => {
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

    this.get3EventSub = this.mdb3Service.get3Event().subscribe((data: any) => {
      this.temp = data["temperature"].toFixed(2);
      this.hum = data["humidity"].toFixed(2);
      this.smokeStatus = data["smokeStatus"];
    })

    
  }

}
