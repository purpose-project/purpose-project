import { Asset } from 'contentful';

export interface Post {
  title: string;
  body: string;
  slug: string;
  author: any[];
  backgroundImage: Asset;
  [property: string]: any;

  sys: {
    createdAt: any; // this is a date time
    id: string;
  };
}
