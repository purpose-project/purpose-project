import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeginComponent } from './begin/begin.component';
import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoalsComponent } from './goals/goals.component';



const beginRoutes: Routes = [
  {
    path: 'begin',
    component: BeginComponent,
    children: [
      {
        path: 'getting-started',
        component: StartComponent
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
