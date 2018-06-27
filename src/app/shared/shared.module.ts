import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    ButtonComponent
  ]
})
export class SharedModule { }
