import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { elementAt, map } from 'rxjs/operators';

import { Post } from './post';

const endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/seanandchristina.blog';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return new Observable<Post[]>(observer => {
      this.loadPosts().subscribe(
        response => {
          if (response) {
            observer.next(response.posts);
            observer.complete();
          } else {
            observer.error(response);
          }
        },
        error => {
          observer.error(error);
        }
      )
    })
  }

  public getPost(slug: string): Observable<Post> {
    return new Observable<Post>(observer => {
      this.loadPost(slug).subscribe(
        response => {
          if (response) {
            observer.next(response[0]);
            observer.complete();
          } else {
            observer.error(response);
          }
        },
        error => {
          observer.error(error);
        }
      )

    });
  }

  private loadPosts(): Observable<any> {
    const url = `${endpoint}/posts`;
    return this.http.get(url);
  }

  private loadPost(slug: string): Observable<Post> {
    let url = `${endpoint}/posts/slug:${slug}`;
    return this.http.get<Post>(url);
  }
}
