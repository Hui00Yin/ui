import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

export interface Order{
  name: string;
  brand: string;
  count: int;
  description: string;
}

@Component({
  selector: 'orders-select',
  templateUrl: './orders-select.component.html',
  styleUrls: ['./orders-select.component.scss']
})

export class OrdersSelectComponent implements OnInit {
  order: FormGroup;
  orders: Order[];
  selectedOrders: Order[];
  constructor(private fb: FormBuilder) {
    this.order = fb.group({
      'name': ['美白神器'],
      'brand':['The Ordinary'],
      'description':['N/A']});
  }

  ngOnInit() {
  }

}
