import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-upgrading',
  templateUrl: './upgrading.component.html',
  styleUrls: ['./upgrading.component.scss']
})
export class UpgradingComponent implements OnInit {
  _ishide = false;
  host: FormGroup;

  constructor(fb: FormBuilder) {
    this.host = fb.group({
      'name': ['host001'],
      'user': ['howard'],
      'pwd': ['123456'],
      'cata': ['testing']});
  }

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
