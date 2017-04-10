import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdExpansionPanelComponent } from './bd-expansion-panel.component';

describe('BdExpansionPanelComponent', () => {
  let component: BdExpansionPanelComponent;
  let fixture: ComponentFixture<BdExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
