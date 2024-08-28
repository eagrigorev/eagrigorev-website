export type PostCategory =
  | 'Illustrations'
  | 'Notes'
  | 'Music & Tabs'
  | 'Reading this Year'
  | 'Want to Read'
  | 'Years of Reading';

export type PostType = 'blogpost' | 'book' | 'booklist' | 'project';

export interface PostMeta {
  title: string;
  slug: string;
  type: PostType;
  category: PostCategory;
  datePublished?: string;
  dateEdited: string;
  featuredImage: string;
  bookAuthor?: string;
  excerpt?: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}
