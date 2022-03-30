import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  displayedColumns: string[] = ['prof', 'date', 'obs'];
  dataSource = new MatTableDataSource();

  dbObservations = [
    { 
      profesional: {
        rut: '123456',
        names: 'Juan 1 lala',
        other: 'lalala'
      },
      comments: 'lalalalalalallalaal',
      date: '2022-03-29T18:00:00'
    }
  ];

  @ViewChild(MatPaginator) set paginator(pager:MatPaginator) {
    if (pager) {
      this.dataSource.paginator = pager;
      this.dataSource.paginator._intl = new MatPaginatorIntl()
      this.dataSource.paginator._intl.itemsPerPageLabel = "Registros por página";
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.dbObservations);
    this.dataSource.paginator = this.paginator;
  }

}
