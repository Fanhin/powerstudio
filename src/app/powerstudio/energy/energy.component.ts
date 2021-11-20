import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Energy on Site', routerLink: ['/energy'] }
    ]);
  }

  ngOnInit(): void {
  }

}
