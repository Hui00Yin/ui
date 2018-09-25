import {SelectionModel} from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit,Input,Output, OnChanges } from '@angular/core';
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
export class SelectTableComponent implements OnInit, OnChanges {
  @Input() tableData: Host[];
  @Output() selectedRows = new EventEmitter<Host[]>();

  displayedColumns: string[] = ['select', 'hostname', 'user','password','cata'];

  dataSource: MatTableDataSource<Host>;
  selection: SelectionModel<Host>;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Host>(this.tableData);
    this.selection = new SelectionModel<Host>(true, []);
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource<Host>(this.tableData);
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
    this.selectedRows.emit(this.selection.selected);
    console.log("The tableData is: in allToggle", this.tableData.length);
  }

  emitSelectedRow(row:any){
    this.selection.toggle(row);
    this.selectedRows.emit(this.selection.selected);
  } 

  

}
