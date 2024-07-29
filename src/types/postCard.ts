/* Utils */
import { PostCategory } from './post';

export interface PostCardImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogPost {
  title: string;
  dateEdited: string;
  category: PostCategory;
  excerpt: string;
}

export interface BookPost {
  bookAuthor: string;
  title: string;
}

export interface BookListPost {
  title: string;
}

export interface ProjectPost extends BookListPost {}

export type PostCardContent = BlogPost | BookPost | BookListPost | ProjectPost;

export interface PostCard {
  href: string;
  image: PostCardImage;
  content: PostCardContent;
}
