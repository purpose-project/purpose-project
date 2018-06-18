import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageTitleService } from './page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle$: Observable<string>;

  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitle$ = this.pageTitleService.title;
  }
}
