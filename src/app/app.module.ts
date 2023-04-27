import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SurveyComponent } from './survey/survey.component';
import { TableComponent } from './table/table.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CrudComponent } from './crud/crud.component';
import { EditCrudComponent } from './crud/edit-crud/edit-crud.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ToolbarComponent,
    SurveyComponent,
    TableComponent,
    CrudComponent,
    EditCrudComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RadioButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
