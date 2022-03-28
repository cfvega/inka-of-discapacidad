import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RecordComponent } from './record/record.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path:'', component: ListComponent },
      { path:'rut/:rut', component: RecordComponent },
      { path: 'nuevo', component: NewComponent, data: {mode:'create'} },
      { path: 'editar/:rut', component: NewComponent, data: {mode: 'editing'} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalRecordsRoutingModule { }
