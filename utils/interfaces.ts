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
  images?: Image[];
}

export type ParentType = 'music' | 'illustrations';

export interface Image {
  src: string;
  caption: string;
  featured: boolean;
  isHidden: boolean;
}

export enum MdxPath {
  illustrations = 'markdown/posts/illustrations',
  // programming = 'markdown/posts/programming',
  // tabs = 'markdown/posts/tabs',
  music = 'markdown/posts/music',
  //writings = 'markdown/posts/writings',
  pages = 'markdown/pages',
}
