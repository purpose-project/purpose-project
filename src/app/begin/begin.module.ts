import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeginRoutingModule } from './begin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    BeginRoutingModule,
    SharedModule
  ],
  declarations: [
    WelcomeComponent,
    StartComponent
  ]
})
export class BeginModule { }
