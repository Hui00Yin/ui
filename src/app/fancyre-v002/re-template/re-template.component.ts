import { Component, OnInit, Input} from '@angular/core';
import {ResName, Birth, Contact, Experience, Education} from '../res.service'

@Component({
  selector: 'app-re-template',
  templateUrl: './re-template.component.html',
  styleUrls: ['./re-template.component.scss']
})

export class ReTemplateComponent implements OnInit {
  @Input() name: ResName;
  @Input() birth: Birth;
  @Input() contact: Contact;
  @Input() experiences: Experience[];
  @Input() educations: Education[];

  constructor() { }

  ngOnInit() {
  }

}
