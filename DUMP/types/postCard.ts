/* Utils */
import { PostCategory } from './post';

export interface PostCardImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PostCardContent {
  title: string;
  dateEdited?: string;
  category?: PostCategory;
  bookAuthor?: string;
  excerpt?: string;
}

export type PostCardStyle = 'default' | 'default-with-excerpt' | 'small';

export interface PostCard {
  href: string;
  image: PostCardImage;
  content: PostCardContent;
  style: PostCardStyle;
}
