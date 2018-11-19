import { Component, OnInit, Input } from '@angular/core';
import {ResService, ResName, Birth, Contact, Experience, Education} from './res.service';

@Component({
  selector: 'app-fancyre-v002',
  templateUrl: './fancyre-v002.component.html',
  styleUrls: ['./fancyre-v002.component.scss']
})
export class FancyreV002Component implements OnInit {
  name: ResName;
  birth: Birth;
  contact: Contact;
  experiences: Experience[];
  educations: Education[];


  constructor(private res: ResService) {
    this.name = res.name;
    this.birth = res.birth;
    this.contact = res.contact;
    this.experiences = res.experience;
    this.educations = res.education;
  }

  ngOnInit() {
    console.log(this.res.Info);
  }



}
