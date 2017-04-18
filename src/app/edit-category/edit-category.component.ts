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
        ['Month', 'Budget', 'Spending'],
        ['Jan', 2345, 4030],
        ['Feb', 3467, 2460],
        ['Mar', 4344, 2321],
        ['Apr', 2344, 5432],
        ['May', 7863, 3532],
        ['Jun', 3565, 5435]];

  public line_ChartOptions = {
        chart: {
          title: 'Last 6 months budget and actual spending',
          subtitle: 'Avg Spending: £ 3737 | Avg Budget: £ 2737'
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
