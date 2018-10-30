import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Order, SelectProductsService} from './select-products.service'

@Component({
  selector: 'orders-select',
  templateUrl: './orders-select.component.html',
  styleUrls: ['./orders-select.component.scss']
})

export class OrdersSelectComponent implements OnInit {
  order: FormGroup;
  orders: Order[];
  selectedOrders: Order[];
  dataSource: any;
  showProductForm: boolean = false;
  selectedCount: number;
  displayedColumns: string[] = ['select', 'name', 'brand', 'count', 'description'];

  constructor(private fb: FormBuilder, private selectService: SelectProductsService) {
    this.order = fb.group({
      'name': ['美白神器'],
      'brand':['The Ordinary'],
      'description':['N/A']});

    this.dataSource = this.selectService.dataSource;
    console.log("dataSource is:", this.dataSource);
  }

  quatities: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  ngOnInit() {
  }

  newProduct(){
    this.showProductForm = true;
  }

  onAddProduct(){
    this.showProductForm = false;
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

