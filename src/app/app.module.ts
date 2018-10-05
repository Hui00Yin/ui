import {LayoutModule} from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {Injector, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../material-module';
import {EntryApp} from './app.component';
import {AppComponent} from './app.component';
import {APP_ROUTES} from './routes';
import { UpgradeServicesComponent } from './upgrade-services/upgrade-services.component';
import { GridComponent } from './grid/grid.component';
import { UpgradingComponent } from './upgrading/upgrading.component';
import { SelectTableComponent } from './select-table/select-table.component';
import { HostMenuComponent } from './host-menu/host-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    //    EntryApp,
    AppComponent,
    UpgradeServicesComponent,
    GridComponent,
    UpgradingComponent,
    SelectTableComponent,
    HostMenuComponent
  ],
  providers: [],
  //bootstrap: [EntryApp]
  bootstrap: [AppComponent]
})

export class AppModule { }
