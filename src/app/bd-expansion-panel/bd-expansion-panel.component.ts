import {
  Component,
  OnInit,
  Input,
  ElementRef,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'bd-expansion-panel',
  templateUrl: './bd-expansion-panel.component.html',
  styleUrls: ['./bd-expansion-panel.component.css']
})
export class BdExpansionPanelComponent implements OnInit, OnChanges {

  @Input() isLast: boolean = false;
  @Input() isActive: boolean = false;
  @Input() isLoading: boolean = false;
  _element: any;

  constructor(element: ElementRef) {
    this._element =
      element.nativeElement;

  }

  ngOnChanges(){
    if(this._isLastPanel()){
      this._element
        .querySelector('.bd-expansion-panel-wrap')
        .style.border = 0;
    }
  }

  private _resetClass(): void{
    let classes = this._element
      .querySelector('.bd-expansion-panel-wrap')
      .classList;
      classes.remove('loading', 'active', 'mat-elevation-z22', 'mat-elevation-z8');
  }

  _isLastPanel(): boolean{
    return this.isLast;
  }

  _isActivePanel(){
    return this.isActive;
  }

  _isLoadingPanel(){
    return this.isLoading;
  }

  ngOnInit() {
  }

  test(){
    this.isLoading = !this.isLoading;
    this._resetClass();
    if(this._isLoadingPanel()){
      this._element
        .querySelector('.bd-expansion-panel-wrap')
        .classList.add('loading', 'mat-elevation-z22');
    }

    if(this._isActivePanel()){
      this._element
        .querySelector('.bd-expansion-panel-wrap')
        .classList.add('active', 'mat-elevation-z8');
    }
  }

}
