import { Pipe, PipeTransform } from '@angular/core';

import { Marked, Renderer } from 'marked-ts';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string): any {
    return this.markdownToHtml(value);
  }

  private markdownToHtml(md: string): string {
    Marked.setOptions({renderer: new BlogPostMdRenderer});
    return Marked.parse(md);
  }
}

class BlogPostMdRenderer extends Renderer {
  heading(text: string, level: number, raw: string): string {
    const htmlClass = 'blog-h' + level;
    return `<h${level} class="${htmlClass}">${text}</h${level}>\n`;
  }
}
