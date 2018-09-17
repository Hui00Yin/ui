import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  RowHeight = 200;
  tiles: {name: string, route: string}[] =[
    {name:'Upgrading', route:'/upgrading'},
    {name:'Card',route:'/upgrade-services'},
    {name:'three',route:'/upgrade-channels'},
    {name:'four',route:'/upgrade-channels'},
    {name:'five',route:'/upgrade-channels'},
    {name:'six',route:'/upgrade-channels'},
  ]

  constructor() { }


  ngOnInit() {
  }

}
