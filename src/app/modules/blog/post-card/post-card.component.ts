import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;
  author: any;
  portrait: any;
  backgroundImage: any;
  headerImage: {
    [key: string]: string;
  };

  constructor() { }

  ngOnInit() {
    this.author = this.post.author[0];
    this.portrait = this.author.fields.portrait;
    this.backgroundImage = this.post.backgroundImage;
    this.headerImage = {
      'background-image': 'url(' + this.portrait.fields.file.url + ')',
      'background-size': 'cover'
    };
  }

}
