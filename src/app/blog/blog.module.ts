import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogComponent,
    PostComponent,
    MdToHtmlPipe
  ]
})
export class BlogModule { }
