import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogRoutingModule } from './blog-routing.module';
import { PostService } from './post.service';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule
  ],
  providers: [
    PostService
  ],
  declarations: [
    BlogComponent,
    CategoryComponent,
    PostComponent,
    MdToHtmlPipe
  ]
})
export class BlogModule { }
