import { Markdown } from './interfaces';

export const sortMarkdownDesc = (markdowns: Markdown[]): Markdown[] => {
  return markdowns.sort((prev, next) => {
    if (prev.meta.date < next.meta.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
