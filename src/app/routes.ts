import {Routes} from '@angular/router';
import {AppComponent} from './app.component'
import {UpgradeServicesComponent} from './upgrade-services/upgrade-services.component'
import {UpgradingComponent} from './upgrading/upgrading.component'
import {GridComponent} from './grid/grid.component'
import {MainNavComponent} from './main-nav/main-nav.component'

export const APP_ROUTES: Routes = [
  {path: '', component:GridComponent
  },
  {path: 'upgrade-services', component:UpgradeServicesComponent},
  {path: 'upgrading', component:UpgradingComponent},
  {path: 'main-nav', component:MainNavComponent},
];
