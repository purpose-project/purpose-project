import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ContentfulService } from '../../contentful.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.logContent('4d1s24xc6QAK8cyeMiQs2c');

    this.post$ = this.contentful.getContent('4d1s24xc6QAK8cyeMiQs2c');
  }

}
