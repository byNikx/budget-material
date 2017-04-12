import {OnChanges, Component, ElementRef, Input } from '@angular/core';


declare var google: any;
declare var isGoogleChartLoaded: boolean;
declare var chartPackages: string[];

@Component({
  selector: 'bd-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnChanges {
  public _element: any;

  @Input() type: string;
  @Input() data: Object;
  @Input() options: Object;
  @Input() drawMaterial: boolean = false;


  constructor(private element: ElementRef) {
    this._element = element.nativeElement;
  }

  ngOnChanges() {
    if(!isGoogleChartLoaded){
      isGoogleChartLoaded = true;
      google.charts.load('current', {'packages':chartPackages});
    }
    setTimeout(() => {
      this.drawChart(this.options, this.type, this.data, this._element)
    },250);
  }

  drawChart(options, chartType, dataTable, element){
    google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var wrapper = new google.visualization.ChartWrapper({
             chartType: 'google.charts.Bar',
             dataTable:dataTable ,
             options:options || {}
           });
      wrapper.draw(element);

    }
  }

}
