import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories:any = [
    {
      name: "Income",
      actual: 34543,
      budget: 5656,
      notification: false
    },{
      name: "Car Transportation",
      actual: 37856,
      budget: 784354,
      notification: false
    },{
      name: "Children",
      actual: 29989,
      budget: 876212,
      notification: false
    },{
      name: "Education",
      actual: 44543,
      budget: 67855,
      notification: true
    },{
      name: "Entertainment & Hobbies",
      actual: 78944,
      budget: 876212,
      notification: false
    },{
      name: "Fines, Late Fees, Loans",
      actual: 67533,
      budget: 66895,
      notification: false
    },{
      name: "Bank Fees & Service Fees",
      actual: 23643,
      budget: 875266,
      notification: false
    },{
      name: "Consumption Loan Payment",
      actual: 124433,
      budget: 656445,
      notification: false
    },
  ];
}
