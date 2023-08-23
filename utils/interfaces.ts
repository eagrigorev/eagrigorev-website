export interface Markdown {
  meta: Meta;
  content: string;
}

export interface Meta {
  title: string;
  slug: string;
  date: string;
  type?: ParentType;
  excerpt?: string;
  category?: string;
  featuredImage?: string;
}

export type ParentType = 'music';

export enum Path {
  // illustrations = 'markdown/posts/illustrations',
  // programming = 'markdown/posts/programming',
  // tabs = 'markdown/posts/tabs',
  music = 'markdown/posts/music',
  //writings = 'markdown/posts/writings',
  pages = 'markdown/pages',
}
