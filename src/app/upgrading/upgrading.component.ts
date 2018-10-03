import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Host } from '../select-host.service';
import { SelectHostService} from '../select-host.service'

@Component({
  selector: 'app-upgrading',
  templateUrl: './upgrading.component.html',
  styleUrls: ['./upgrading.component.scss']
})
export class UpgradingComponent implements OnInit {
  _ishide = false;
  host: FormGroup;
  hosts: Host[];
  selectedHosts: Host[];

  constructor(private fb: FormBuilder, private selectService:SelectHostService<Host> ) {
    this.host = fb.group({
      'hostname': ['host001'],
      'user': ['howard'],
      'password': ['123456'],
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

  onSubmit = (value: Host) => {
    this._ishide =false;
    this.selectService.newHost(value);
    /*let cloneArray = this.hosts.map(obj => Object.assign({}, obj));
    cloneArray.push(value);
    this.hosts = cloneArray;
    console.log("onSubmit: ", this.hosts);*/
  }

  onDelete = () => this.selectService.delHosts();
}
