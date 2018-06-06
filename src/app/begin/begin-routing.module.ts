import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';



const beginRoutes: Routes = [
  { path: 'getting-started/:id', component: StartComponent },
  { path: 'welcome',         component: WelcomeComponent },
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
