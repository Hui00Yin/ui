import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {ResService, ResName, Birth, Contact, Experience, Education} from './res.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-fancyre-v002',
  templateUrl: './fancyre-v002.component.html',
  styleUrls: ['./fancyre-v002.component.scss']
})
export class FancyreV002Component implements AfterViewInit {
  name: ResName;
  birth: Birth;
  contact: Contact;
  experiences: Experience[];
  educations: Education[];

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private res: ResService) {
    this.name = res.name;
    this.birth = res.birth;
    this.contact = res.contact;
    this.experiences = res.experience;
    this.educations = res.education;
  }

  ngAfterViewInit() {
    this.sidenav.open();
  }



}
