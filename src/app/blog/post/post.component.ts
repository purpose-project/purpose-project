import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PageTitleService } from '../../page-title.service';
import { ContentfulService } from '../../contentful.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private titleService: PageTitleService,
    private route: ActivatedRoute,
    private postService: PostService,
    private contentful: ContentfulService
  ) { }

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.postService.getPost(params.get('slug')))
    );

    // this.contentful.logContent('4d1s24xc6QAK8cyeMiQs2c');

    // this.post$ = this.contentful.getContent('4d1s24xc6QAK8cyeMiQs2c');
    this.post$.subscribe(post => {
      console.log(post);
      this.titleService.setTitle(post.title);

    });
  }

}
