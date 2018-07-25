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

  getContent(query?: any): Observable<any> {
    let promise;
    if (query) {
      promise = this.client.getEntries(query);
    } else {
      promise = this.client.getEntries();
    }
    return from<any>(promise).pipe(map(res => res.items));
  }
}
