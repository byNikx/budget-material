import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bd-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() category: any;
  @Input() isLast: boolean;
  @Input() isActive: boolean;
  @Input() isFirst: boolean;
  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

  test(){
    if(this.isActivePanel()) { this.isActive = false; return; }
    if(this.isLoadingPanel()) return;

    this.isLoading = true;
    setTimeout(()=>{
      this.isLoading = false;
      this.isActive = true;
    },2000);
  }


  isLastPanel(): boolean{
    return this.isLast;
  }

  isActivePanel(): boolean{
    return this.isActive;
  }

  isFirstPanel(): boolean{
    return this.isFirst;
  }

  isLoadingPanel(): boolean{
    return this.isLoading;
  }


}
