import { Component, OnInit, NgModule } from '@angular/core';
import { ChartModule,
  AreaSeriesService,
  StepAreaSeriesService,
  StackingAreaSeriesService,
  MultiColoredAreaSeriesService,
  RangeAreaSeriesService,
  DateTimeService, CategoryService, BarSeriesService, StackingBarSeriesService
} from '@syncfusion/ej2-angular-charts';
import { ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { BrowserModule } from '@angular/platform-browser';
import { areaData, groupData } from '../chart/datasource';
import { AppComponent } from '../app.component';

@NgModule({
imports: [ BrowserModule, ChartModule ],
bootstrap: [AppComponent],
declarations: [AppComponent],
providers: [CategoryService,
  ColumnSeriesService, AreaSeriesService , RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
  DateTimeService, CategoryService, MultiColoredAreaSeriesService, BarSeriesService, StackingBarSeriesService ]
})

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  public chartData: Object [];
  // tslint:disable-next-line: ban-types
  public chartData2: Object [];
  // tslint:disable-next-line: ban-types
  public chartData3: Object [];
  // tslint:disable-next-line: ban-types
  public chartData4: Object [];
  // tslint:disable-next-line: ban-types
  public primaryXAxis: Object;
  // tslint:disable-next-line: ban-types
  public legendSettings: Object;
  // tslint:disable-next-line: ban-types
  public columnMarker: Object;
  // tslint:disable-next-line: ban-types
  public tooltip: Object;
  public title: string;
  public title2: string;
  // tslint:disable-next-line: ban-types
  public primary1XAxis: Object;
  // tslint:disable-next-line: ban-types
  public primary1YAxis: Object;

  constructor() { }

  ngOnInit(): void {
    this.legendSettings = {visible : true};
    this.columnMarker = { dataLabel : { visible: true, position: 'Top'}};
    this.tooltip = {enable : true};

    this.chartData = [
      { year: '2000', gold: 35, silver: 25 }, { year: '2001', gold: 28, silver: 20 },
      { year: '2002', gold: 34, silver: 21 }, { year: '2003', gold: 32, silver: 15 },
      { year: '2004', gold: 40, silver: 30 }
      ];

    this.chartData2 = [
      { year: '2000', gold: 40, silver: 25 }, { year: '2001', gold: 28, silver: 20 },
      { year: '2002', gold: 20, silver: 21 }, { year: '2003', gold: 32, silver: 15 },
      { year: '2004', gold: 10, silver: 30 }
      ];
    this.primaryXAxis = { valueType: 'Category' };

    this.chartData3 = areaData;
    this.primary1XAxis = {
        title: 'Year',
        minimum: 1900, maximum: 2000, interval: 10,
        edgeLabelPlacement: 'Shift'
    };
    this.primary1YAxis = {
        minimum: 2, maximum: 5, interval: 0.5,
        title: 'Sales Amount in Millions'
    };
    this.title = 'Average Sales Comparison';

    this.chartData4 = groupData;
    this.title2 = 'Sales by year';
  }

}
