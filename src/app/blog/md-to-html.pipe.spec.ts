import { MdToHtmlPipe } from './md-to-html.pipe';

describe('MdToHtmlPipe', () => {
  const pipe = new MdToHtmlPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('converts Markdown to HTML', () => {
    const md = '## Testing contentful out\nHere it is!';
    expect(pipe.transform(md)).toBe('<h2 class="blog-h2">Testing contentful out</h2>\n<p>Here it is!</p>\n');
  });
});
