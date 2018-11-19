import {Routes} from '@angular/router';
import {AppComponent} from './app.component'
import {UpgradeServicesComponent} from './upgrade-services/upgrade-services.component'
import {UpgradingComponent} from './upgrading/upgrading.component'
import {GridComponent} from './grid/grid.component'
import {MainNavComponent} from './main-nav/main-nav.component'
import {PostexpressComponent} from './postexpress/postexpress.component'
import {FancyresumeComponent} from './fancyresume/fancyresume.component'
import {FancyreV002Component} from './fancyre-v002/fancyre-v002.component'

export const APP_ROUTES: Routes = [
  {path: '', component:GridComponent
  },
  {path: 'upgrade-services', component:UpgradeServicesComponent},
  {path: 'upgrading', component:UpgradingComponent},
  {path: 'main-nav', component:MainNavComponent},
  {path: 'postexpress', component:PostexpressComponent},
  {path: 'fancyresume', component:FancyresumeComponent},
  {path: 'fancyresume002', component:FancyreV002Component},
];
