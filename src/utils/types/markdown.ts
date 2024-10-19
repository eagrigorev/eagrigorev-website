export interface PageMeta {
  title: string;
  slug: string;
}

export interface PostMeta extends PageMeta {
  description: string;
  type: string;
  category: string;
  datePublished?: string;
  dateEdited: string;
}

export interface Page {
  meta: PageMeta;
  content: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}

export interface Matter {
  [key: string]: any;
}
