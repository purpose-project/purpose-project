import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ButtonComponent
  ]
})
export class SharedModule { }
