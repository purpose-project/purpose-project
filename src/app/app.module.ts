import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BeginModule } from './modules/begin/begin.module';
import { BlogModule } from './modules/blog/blog.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TitleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    BeginModule,
    BlogModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
