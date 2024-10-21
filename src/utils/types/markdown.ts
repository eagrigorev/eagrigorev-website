export interface Matter {
  [key: string]: any;
}

export interface PageMeta {
  title: string;
  slug: string;
}

export interface Page {
  meta: PageMeta;
  content: string;
}

export interface PostMeta extends PageMeta {
  type: string;
  description: string;
  category: string;
  datePublished?: string;
  dateEdited: string;
  externalLink?: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}
