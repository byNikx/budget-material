import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bd-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  private editing: boolean = false;
  private editingEnable: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public isEditing(): boolean{
    return this.editing;
  }

  public isEditingEnable(): boolean{
    return this.editingEnable;
  }

  public toggleEditing(): void{
    this.editingEnable = !this.editingEnable;
  }

}
