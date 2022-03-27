import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['rut', 'names', 'phone', 'sector', 'options'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) set paginator(pager:MatPaginator) {
    if (pager) {
      this.dataSource.paginator = pager;
      this.dataSource.paginator._intl = new MatPaginatorIntl()
      this.dataSource.paginator._intl.itemsPerPageLabel = "Pacientes por página";
    }
  }


  constructor() { }

  ngOnInit(): void {
    const data:any = [
      { 
        rut: '19592171-7',
        names: 'Claudio Vega Lagos',
        phone: '933640150',
        sector: {
          id: 1,
          name: 'Larmahue'
        }
      }
    ];
    this.dataSource = new MatTableDataSource(data);
  }

  filterData(data: any) {
    this.dataSource.filter = data.value;
  }

}
