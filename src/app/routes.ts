import {Routes} from '@angular/router';
import {AppComponent} from './app.component'
import {UpgradeServicesComponent} from './upgrade-services/upgrade-services.component'
import {UpgradingComponent} from './upgrading/upgrading.component'
import {GridComponent} from './grid/grid.component'

export const APP_ROUTES: Routes = [
  {path: '', component:GridComponent
  },
  {path: 'upgrade-services', component:UpgradeServicesComponent},
  {path: 'upgrading', component:UpgradingComponent},
];
