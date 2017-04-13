import { Component, OnInit, Input } from '@angular/core';

const MONTHS = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'
];

@Component({
  selector: 'bd-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  @Input() slideOn: any[];
  private index: number = 0;

  year: number;
  label: string;
  constructor() {}

  ngOnInit() {
    let date = new Date();
    this.slideOn = MONTHS;
    this.year = date.getFullYear();
    this.index = date.getMonth();
    this.label = this.slideOn[
      this.getIndex()
    ];
  }

  public getIndex(): number{
    return this.index;
  }
  public getNextIndex(): number{
    return ++this.index;
  }
  public getPreviousIndex(): number{
    return --this.index;
  }
  public next(): void{
    if(!this.isLast())
      this.label = this.slideOn[
        this.getNextIndex()
      ];
  }
  public previous(): void{
    if(!this.isFirst())
      this.label = this.slideOn[
        this.getPreviousIndex()
      ];
  }
  public isFirst(): boolean{
    return this.getIndex() === 0;
  }
  public isLast(): boolean{
    return this.getIndex() === this.slideOn.length-1;
  }
  // public hasNext(): boolean{
  //   let indexToCheck = this.getNextIndex();
  //   return indexToCheck > this.slideOn.length;
  // }



}
