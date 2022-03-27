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

  @ViewChild(MatPaginator) set paginator(pager:MatPaginator) {
    if (pager) {
      this.dataSource.paginator = pager;
      this.dataSource.paginator._intl = new MatPaginatorIntl()
      this.dataSource.paginator._intl.itemsPerPageLabel = "Registros por página";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
