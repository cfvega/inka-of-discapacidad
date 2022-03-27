import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RecordComponent } from './record/record.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path:'', component: ListComponent },
      { path:'rut/:rut', component: RecordComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalRecordsRoutingModule { }
