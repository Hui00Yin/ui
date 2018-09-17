import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UpgradeServicesComponent} from './upgrade-services/upgrade-services.component'

export interface PeriodicElement {
  name: string;
  No: number;
  action: number;
  time: string;
}

@Component({
  selector: 'entry-app',
  template: '<router-outlet></router-outlet>',
})

export class EntryApp{}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  title = 'ui';
}
