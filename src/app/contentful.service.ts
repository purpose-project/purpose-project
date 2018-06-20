import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import * as contentful from 'contentful';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  // console logs a repsonse for debugging
  logContent(contentId: string) {
    this.client.getEntry(contentId)
      .then((entry) => console.log(entry));
  }

  getContent(contentId: string): Observable<any> {
    const promise = this.client.getEntry(contentId);
    return from(promise).pipe(map(entry => entry.fields));
  }
}
