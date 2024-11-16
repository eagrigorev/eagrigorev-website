export interface Matter {
  [key: string]: any;
}

const types = ['portfolio', 'library', 'journal'] as const;

export type MarkdownType = (typeof types)[number];

export interface Meta {
  title: string;
  slug?: string;
  type?: MarkdownType;
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
