import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { SurveyComponent } from './survey/survey.component';
import { TableComponent } from './table/table.component';
import { CrudComponent } from './crud/crud.component';
import { EditCrudComponent } from './crud/edit-crud/edit-crud.component';
import { PuchaseComponent } from './puchase/puchase.component';
import { EditPuchaseComponent } from './puchase/edit-puchase/edit-puchase.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'table', component: TableComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'crud/edit/:id', component: EditCrudComponent },
  { path: 'puchase', component: PuchaseComponent },
  { path: 'puchase/edit/:id', component: EditPuchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
