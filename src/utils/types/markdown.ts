export interface Matter {
  [key: string]: any;
}

export interface Meta {
  title: string;
  slug: string;
  category?: string;
  dateEdited?: string;
  datePublished?: string;
  description?: string;
  externalLink?: string;
}

export interface Markdown {
  meta: Meta;
  content: string;
}
