import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bd-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public line_ChartData = [
        ['Year', 'Budget', 'Spending'],
        ['2004', 1000, 400],
        ['2005', 3467, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]];

  public line_ChartOptions = {
        chart: {
          title: 'Last 12 months budget and actual spending',
          subtitle: 'Average is $28737'
        },
        width: '100%',
        height: '400',
        animation: {
          startup: true,
          duration:250
        },
        background: 'transparent',
        legend: { position: 'bottom' }
      };

}
