import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts$: Observable<any>;

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
    this.posts$.subscribe(res => console.log(res));
  }
}
