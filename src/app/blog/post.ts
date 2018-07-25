export interface Post {
  fields: {
    title: string;
    body: string;
    slug: string;
  };

  sys: {
    createdAt: any; // this is a date time
    id: string;
  };
}
