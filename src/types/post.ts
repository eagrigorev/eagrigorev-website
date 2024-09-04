export type WorksCategories = 'Illustrations' | 'Music & Tabs';
export type JournalCategories = 'Hobbies' | 'Notes';
export type LibraryCategories =
  | 'Reading this Year'
  | 'Want to Read'
  | 'Years of Reading';

export type PostCategory =
  | WorksCategories
  | JournalCategories
  | LibraryCategories;

export type PostType = 'blogpost' | 'book' | 'project';

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
  tags?: string[];
}

export interface Post {
  meta: PostMeta;
  content: string;
}
