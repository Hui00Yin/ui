import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Host } from '../select-table/select-table.component';

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

  constructor(fb: FormBuilder) {
    this.host = fb.group({
      'hostname': ['host001'],
      'user': ['howard'],
      'password': ['123456'],
      'cata': ['testing']});
    this.hosts = [
  {hostname: 'howard001', user:'howard', password:'123', cata:'test'},
  {hostname: 'howard002', user:'howard', password:'123', cata:'develop'},
  {hostname: 'howard003', user:'howard', password:'123', cata:'develop'},
  {hostname: 'howard004', user:'howard', password:'123', cata:'develop'},
  {hostname: 'howard005', user:'howard', password:'123', cata:'develop'},
];
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
    let cloneArray = this.hosts.map(obj => Object.assign({}, obj));
    cloneArray.push(value);
    this.hosts = cloneArray;
    console.log("onSubmit: ", this.hosts);
  }

  updateHosts(selected: Host[]){
    this.selectedHosts = selected;  
    console.log("updateHosts: ", this.selectedHosts);
  }

}
