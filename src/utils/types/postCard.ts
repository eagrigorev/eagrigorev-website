export interface PostCard {
  size: 's' | 'm' | 'l';
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  content: {
    title: string;
    description: string;
    dateEdited: string;
    category?: string;
  };
}
