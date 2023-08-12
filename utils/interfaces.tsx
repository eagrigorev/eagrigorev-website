export interface Markdown {
  meta: Meta;
  content: string;
}

export interface Meta {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  category?: string;
  featuredImage?: string;
}

export enum Path {
  // illustrations = 'markdown/posts/illustrations',
  // programming = 'markdown/posts/programming',
  // tabs = 'markdown/posts/tabs',
  writings = 'markdown/posts/writings',
  pages = 'markdown/pages',
}
