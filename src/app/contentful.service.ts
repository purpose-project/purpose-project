import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { createClient, Entry, EntryCollection } from 'contentful';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getEntries(query?: any): Observable<Entry<any>[]> {
    let promise;
    if (query) {
      promise = this.client.getEntries(query);
    } else {
      promise = this.client.getEntries();
    }
    return from<EntryCollection<any>>(promise).pipe(map(res => res.items));
  }

  getEntry(id: string): Observable<Entry<any>> {
    const promise = this.client.getEntry(id);
    return from<Entry<any>>(promise);
  }
}
