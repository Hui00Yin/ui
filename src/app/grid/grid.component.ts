import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  RowHeight = 200;
  tiles: {name: string, description: string, route: string}[] =[
    {name:'Upgrading', description: "Upgrade services", route:'/upgrading'},
    {name:'Card', description: "Card examples",route:'/upgrade-services'},
    {name:'Main Navigation', description: "Navigation examples",route:'/main-nav'},
    {name:'Post Express', description: "A shopping cart project",route:'/postexpress'},
    {name:'Fancy Resume', description: "Create a fancy dynamic resume template",route:'/fancyresume'},
    {name:'Fancy Resume Version 2', description: "Create a fancy dynamic resume template version 2",route:'/fancyresume002'},
    {name:'Rxjs data cache', description: "It's an another data cache layer implements with Rxjs",route:'/rxjs-data-cache'},
    {name:'six', description: "to be defined",route:'/upgrade-channels'},
    {name:'six', description: "to be defined",route:'/upgrade-channels'},
    {name:'six', description: "to be defined",route:'/upgrade-channels'},
    {name:'six', description: "to be defined",route:'/upgrade-channels'},
    {name:'six', description: "to be defined",route:'/upgrade-channels'},
  ]

  constructor() { }


  ngOnInit() {
  }

}
