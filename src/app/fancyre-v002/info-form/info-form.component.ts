import { Component, OnInit } from '@angular/core';
import {ResService} from '../res.service';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss']
})
export class InfoFormComponent implements OnInit {
  constructor(private resService: ResService) {

  }

  ngOnInit() {
  }

}
