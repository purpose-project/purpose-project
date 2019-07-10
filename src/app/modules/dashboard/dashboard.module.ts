import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatListModule } from '@angular/material';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JournalComponent } from './journal/journal.component';
import { GoalsListComponent } from './goals-list/goals-list.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    DashboardComponent,
    JournalComponent,
    GoalsListComponent
  ]
})
export class DashboardModule { }
