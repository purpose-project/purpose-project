export interface Post {
  fields: {
    title: string;
    body: string;
    slug: string;
    author: any[];
    [property: string]: any;
  };

  sys: {
    createdAt: any; // this is a date time
    id: string;
  };
}
