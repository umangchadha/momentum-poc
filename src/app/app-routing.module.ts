import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  FundsGridComponent
} from './components/funds-grid/funds-grid.component';
import {
  MomentumComponent
} from './components/momentum/momentum.component';
import { BlankComponent } from './components/shared/blank/blank.component';

const routes: Routes = [{
  path: 'momentum',
  component: MomentumComponent,

  children: [{
    path: '',
    redirectTo: 'fundsgrid',
    pathMatch: 'full'
  },
  {
    path: 'fundsgrid',
    component: FundsGridComponent,
  },
  {
    path: 'dashboard',
    component: BlankComponent,
  },
  {
    path: 'summaryfunds',
    component: BlankComponent,
  },
  {
    path: 'customview',
    component: BlankComponent,
  }

  ]
},


{
  path: '',
  redirectTo: 'momentum',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'momentum',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
