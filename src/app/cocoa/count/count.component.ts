import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Cocoa' },
      { label: 'Customer Count', routerLink: ['cocoa/count'] }
    ]);
  }

  ngOnInit(): void {
  }

}
