import { NgModule } from '@angular/core';

import { BeginRoutingModule } from './begin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BeginComponent } from './begin/begin.component';
import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  imports: [
    BeginRoutingModule,
    SharedModule
  ],
  declarations: [
    WelcomeComponent,
    StartComponent,
    GoalsComponent,
    BeginComponent
  ]
})
export class BeginModule { }
