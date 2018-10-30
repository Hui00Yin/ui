import { Injectable } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

export class Order{
  name: string;
  brand: string;
  count: number;
  description: string;
}
const Orders_Data: Order[] = [
  {name: '粉水', brand:'Lancome', count:1, description: 'N/A'},
  {name: '粉水', brand:'Lancome', count:1, description: 'N/A'},
  {name: '粉水', brand:'Lancome', count:1, description: 'N/A'},
  {name: '粉水', brand:'Lancome', count:1, description: 'N/A'},
  {name: '粉水', brand:'Lancome', count:1, description: 'N/A'},
  {name: '粉水', brand:'Lancome', count:1, description: 'N/A'},
  {name: '粉水', brand:'Lancome', count:10, description: 'N/A'},
]

@Injectable({
  providedIn: 'root'
})
export class SelectProductsService {
  dataSource = new MatTableDataSource<Order>(Orders_Data);
  selection = new SelectionModel<Order>(true, []);

  constructor() {
  }
  
  get data(): Order[] { return this.dataSource.data;}
  set data(order: Order[]) { this.dataSource.data = order;}

  hasValue(){
    this.selection.hasValue();
  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    console.log("isAllSelected numSelected: ", numSelected);
    console.log("isAllSelected numRows: ", numRows);

    return numSelected === numRows;
  }

  allToggle(){
    this.isAllSelected()?
      this.selection.clear():
      this.data.forEach((row) => {
        console.log("allToggle: ", row);
        return this.selection.select(row)});
  }

  toggleRow(row:any){
    this.selection.toggle(row);
  } 
}
