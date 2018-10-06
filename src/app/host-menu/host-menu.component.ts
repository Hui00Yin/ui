import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-host-menu',
  templateUrl: './host-menu.component.html',
  styleUrls: ['./host-menu.component.scss']
})
export class HostMenuComponent implements OnInit {

  @Output()
  itemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  items = [
    {text: 'Profile'},
    {text: 'Start'},
    {text: 'Stop'},
    {text: 'Delete', disabled: false}
  ]

  onClick(itemText: string) {
    this.itemEvent.emit(itemText);
  }
}
