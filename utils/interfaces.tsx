export interface Post {
  meta: PostMeta;
  content: string;
}

export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  type: PostType;
  excerpt?: string;
  category?: string;
}

export enum PostType {
  blog = 'blog',
  page = 'page',
}
