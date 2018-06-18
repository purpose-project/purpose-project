import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.setTitle('Page not found');
  }

}
