import { NgModule } from '@angular/core';

import { BeginRoutingModule } from './begin-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    BeginRoutingModule,
    SharedModule
  ],
  declarations: [
    WelcomeComponent,
    StartComponent
  ]
})
export class BeginModule { }
