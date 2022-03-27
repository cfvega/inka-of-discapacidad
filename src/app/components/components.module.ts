import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { ResumeRecordComponent } from './resume-record/resume-record.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AccordionComponent,
    ResumeRecordComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    AccordionComponent,
    ResumeRecordComponent
  ]
})
export class ComponentsModule { }
