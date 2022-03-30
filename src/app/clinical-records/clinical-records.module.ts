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
import {KnobModule} from 'primeng/knob';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


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
    ChipsModule,
    KnobModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClinicalRecordsModule { }
