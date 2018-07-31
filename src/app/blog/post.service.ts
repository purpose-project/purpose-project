import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { elementAt, map } from 'rxjs/operators';

import { Entry } from 'contentful';

import { ContentfulService } from '../contentful.service';

import { Post } from './post';


@Injectable()
export class PostService {

  constructor(
    private contentful: ContentfulService
  ) { }

  public getPosts(): Observable<Entry<Post>[]> {
    return new Observable<Entry<Post>[]>(observer => {
      this.contentful.getEntries({content_type: 'post'}).subscribe(
        response => {
          if (response) {
            observer.next(response as Entry<Post>[]);
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

  public getPost(slug: string): Observable<Entry<Post>> {
    const query = {
      content_type: 'post',
      'fields.slug': slug
    };
    return new Observable<Entry<Post>>(observer => {
      this.contentful.getEntries(query).subscribe(
        response => {
          if (response) {
            observer.next(response[0] as Entry<Post>);
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
}
