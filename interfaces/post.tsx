export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  type: PostType;
  excerpt?: string;
  category?: string;
}

export type PostType = 'blog' | 'page' | 'art' | 'tabs';
