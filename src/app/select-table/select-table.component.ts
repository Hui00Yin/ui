import {SelectionModel} from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit,Input,Output, OnChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Host, SelectHostService} from '../select-host.service'

@Component({
  selector: 'select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})
export class SelectTableComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['select', 'hostname', 'user','password','cata'];

  dataSource: SelectHostService<Host>;

  constructor(private selectService: SelectHostService<Host>) { }

  ngOnInit() {
    this.dataSource = this.selectService;
  }

  ngOnChanges(){
  }

  hasValue(){
    this.selectService.hasValue();
  }

  isSelected(row:any){
    return this.selectService.selection.isSelected(row);
}

  isAllSelected(){
    return this.selectService.isAllSelected();
  }

  allToggle(){
    this.selectService.allToggle();
  }

  emitSelectedRow(row:any){
    this.selectService.toggleRow(row);
  } 

  changeCheckBox($event, row) {
    return $event? this.selectService.selection.toggle(row): null;
  }
}
