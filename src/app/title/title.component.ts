import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  pageTitle$: Observable<string>;
  backgroundImageUrl$: Observable<string>;

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitle$ = this.pageTitleService.title;
    this.backgroundImageUrl$ = this.pageTitleService.backgroundImage;
  }

}
