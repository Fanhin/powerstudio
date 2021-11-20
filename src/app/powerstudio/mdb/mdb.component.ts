import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-mdb',
  templateUrl: './mdb.component.html',
  styleUrls: ['./mdb.component.scss']
})
export class MdbComponent implements OnInit {
  likeChart: any;
  likeOptions: any;

  constructor(
    private breadcrumbService: AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Power Studio' },
      { label: 'MDB', routerLink: ['/MDB'] }
    ]);
  }

  ngOnInit(): void {
    this.likeChart = {
      labels: ['Harmony'],
      datasets: [{
        label: 'Value',
        data: [20],
        backgroundColor: '#f16383',
        borderWidth: 0,
        fill: false,
      }, {
        label: 'Percentage',
        data: [100],
        backgroundColor: '#f1b263',
        borderWidth: 0,
        fill: false,
      }]
    };

    this.likeOptions = {
      legend: {
        display: false,
        labels: {
          fontColor: '#c3ccdd'
        }
      },
      responsive: true,
      hover: {
        mode: 'index'
      },
      scales: {
        xAxes: [{
          display: false,
          stacked: true,
        }],
        yAxes: [{
          display: false,
          stacked: true
        }]
      }
    };
  }

}
