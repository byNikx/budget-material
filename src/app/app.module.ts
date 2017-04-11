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
  MdCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

const MD_COMPONENTS =[
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdProgressBarModule,
  MdCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ].concat(MD_COMPONENTS),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
