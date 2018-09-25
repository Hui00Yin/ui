import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface Host {
  hostname: string;
  user:     string;
  password: string;
  cata:     string;
}

const HOST_DATA: Host[] = [
  {hostname: 'howard001', user:'howard', password:'123', cata:'test'},
  {hostname: 'howard002', user:'howard', password:'123', cata:'develop'},
];


@Component({
  selector: 'select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})
export class SelectTableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'hostname', 'user','password','cata'];

  dataSource = new MatTableDataSource<Host>(HOST_DATA);
  selection = new SelectionModel<Host>(true, []);

  constructor() { }

  ngOnInit() {
  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  allToggle(){
    this.isAllSelected()?
      this.selection.clear():
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
