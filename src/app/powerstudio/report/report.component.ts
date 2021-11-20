import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'Report', routerLink: ['/report'] }
    ]);
  }

  ngOnInit(): void {
  }

}
