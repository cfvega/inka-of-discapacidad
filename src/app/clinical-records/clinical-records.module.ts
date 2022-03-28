import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ClinicalRecordsRoutingModule } from './clinical-records-routing.module';
import { ListComponent } from './list/list.component';
import { RecordComponent } from './record/record.component';
import { NewComponent } from './new/new.component';
import { ComponentsModule } from '../components/components.module';

import {ChipsModule} from 'primeng/chips';



@NgModule({
  declarations: [
    ListComponent,
    RecordComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    ClinicalRecordsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    ComponentsModule,
    ChipsModule
  ]
})
export class ClinicalRecordsModule { }
