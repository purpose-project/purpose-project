import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { elementAt, map } from 'rxjs/operators';

import { ContentfulService } from '../contentful.service';

import { Post } from './post';

const endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/seanandchristina.blog';

@Injectable()
export class PostService {

  constructor(
    private contentful: ContentfulService
  ) { }

  public getPosts(): Observable<Post[]> {
    return new Observable<Post[]>(observer => {
      this.contentful.getContent({content_type: 'post'}).subscribe(
        response => {
          if (response) {
            observer.next(response as Post[]);
            observer.complete();
          } else {
            observer.error(response);
          }
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  public getPost(id: string): Observable<Post> {
    return this.contentful.getContent(id);
  }
}
