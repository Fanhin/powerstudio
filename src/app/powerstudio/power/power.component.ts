import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {

    constructor(
        private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
          { label: 'Power Studio' },
          { label: 'Power on Site ', routerLink: ['/power'] }
        ]);
      }

  ngOnInit(): void {
  }

}
