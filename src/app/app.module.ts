import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule,
  MdRadioModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { SliderComponent } from './slider/slider.component';

const MD_COMPONENTS =[
  FlexLayoutModule,
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule,
  MdRadioModule
];

@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
    SubCategoryComponent,
    EditCategoryComponent,
    GoogleChartComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ].concat(MD_COMPONENTS),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
