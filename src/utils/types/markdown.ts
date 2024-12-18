export interface Matter {
  [key: string]: any;
}

export interface Meta {
  title: string;
  slug?: string;
  type?: 'portfolio' | 'journal';
  category?: string;
  dateEdited?: string;
  datePublished?: string;
  description?: string;
  author?: string;
  externalLink?: string;
}

export interface Markdown {
  meta: Meta;
  content: string;
}
