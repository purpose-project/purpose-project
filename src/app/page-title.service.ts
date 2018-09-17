import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';

const titleStream = new Subject<string>();
const backgroundImageStream = new Subject<string>();

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  get title(): Observable<string> {
    return titleStream;
  }

  setTitle(val: string) {
    titleStream.next(val);
  }

  get backgroundImage(): Observable<string> {
    return backgroundImageStream;
  }

  setBackgroundImage(url: string) {
    backgroundImageStream.next(url);
  }
}
