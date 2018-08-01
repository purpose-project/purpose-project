import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PageTitleService } from '../../page-title.service';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private postService: PostService,
    private titleService: PageTitleService
  ) { }
  posts$: Observable<Post[]>;

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
    this.titleService.setBackgroundImage('https://source.unsplash.com/gD7KrKqYZFk/1600x900');
  }
}
