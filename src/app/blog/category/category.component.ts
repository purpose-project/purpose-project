import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Entry } from 'contentful';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts$: Observable<Entry<Post>[]>;

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }
}
