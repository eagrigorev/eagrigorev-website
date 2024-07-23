export type NavigationItem = {
  title: string;
  url: string;
};

export type PostCategory =
  | 'all'
  | 'Illustrations'
  | 'Life Updates'
  | 'Music & Tabs'
  | 'Reading this Year'
  | 'Want to Read'
  | 'Years of Reading';

export type ImageLayout = 'wide' | 'left' | 'right' | 'left-split';

export type SpotifyLayout = 'big' | 'small';

export type PostCardType = 'book' | 'booklist' | 'blogpost' | 'project';

export type PostCardImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BlogPost = {
  title: string;
  dateEdited: string;
  category: PostCategory;
  excerpt: string;
};

export type BookPost = {
  author: string;
  title: string;
};

export type BookListPost = {
  title: string;
};

export type ProjectPost = {
  title: string;
};

export type PostCard = {
  href: string;
  image: PostCardImage;
  blogpost?: BlogPost;
  book?: BookPost;
  booklist?: BookListPost;
  project?: ProjectPost;
};

export type PostMeta = {
  title: string;
  slug?: string;
  datePublished?: string;
  dateEdited?: string;
  postType?: PostCardType;
  category?: PostCategory;
  featuredImage?: string;
  author?: string;
  image?: string;
  url?: string;
  excerpt?: string;
};

export type Post = {
  meta: PostMeta;
  content: string;
};
