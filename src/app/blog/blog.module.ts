import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';

import { PostService } from './post.service';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { PostCardComponent } from '../blog/post-card/post-card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    SharedModule,
    BlogRoutingModule
  ],
  providers: [
    PostService
  ],
  declarations: [
    BlogComponent,
    CategoryComponent,
    PostComponent,
    MdToHtmlPipe,
    PostCardComponent
  ]
})
export class BlogModule { }
