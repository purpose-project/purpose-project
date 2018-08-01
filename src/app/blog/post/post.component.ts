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
    private postService: PostService
  ) { }

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.postService.getPost(params.get('slug')))
    );

    this.post$.subscribe(post => {
      this.titleService.setTitle(post.title);
      this.titleService.setBackgroundImage(post.backgroundImage.fields.file.url);
    });
  }

}
