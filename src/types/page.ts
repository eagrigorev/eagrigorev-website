export interface PageMeta {
  title: string;
  slug: string;
}

export interface Page {
  meta: PageMeta;
  content: string;
}
