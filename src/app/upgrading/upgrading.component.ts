import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-upgrading',
  templateUrl: './upgrading.component.html',
  styleUrls: ['./upgrading.component.scss']
})
export class UpgradingComponent implements OnInit {
  _ishide = false;

  constructor() { }

  ngOnInit() {
  }

  isHide = () => {
    return this._ishide;
  }

  newHost = () =>{
    this._ishide = true;
  }

  submit = () => {
    this._ishide =false;
  }

}
