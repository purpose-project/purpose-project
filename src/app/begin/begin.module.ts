import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { BeginRoutingModule } from './begin-routing.module';



@NgModule({
  imports: [
    CommonModule,
    BeginRoutingModule
  ],
  declarations: [
    WelcomeComponent,
    StartComponent
  ]
})
export class BeginModule { }
