import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeginComponent } from './begin/begin.component';
import { IdealLifeComponent } from './ideal_life/ideal-life.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoalsComponent } from './goals/goals.component';



const beginRoutes: Routes = [
  {
    path: 'begin',
    component: BeginComponent,
    children: [
      {
        path: 'ideal_life',
        component: IdealLifeComponent
      },
      {
        path: 'goals',
        component: GoalsComponent
      },
      {
        path: '',
        component: WelcomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(beginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BeginRoutingModule { }
