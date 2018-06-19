import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../page-title.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.setTitle('Blog');
  }

}
