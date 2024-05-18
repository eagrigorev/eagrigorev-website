import { getProjects, getMarkdownSingleCategory } from '@/scripts/getMarkdown';
import { sortContentDesc } from './sort';

export const loadContent = (type, category) => {
  let allContent = [];
  if (type === 'projects') {
    if (category === 'all') {
      allContent = sortContentDesc(getProjects());
    } else {
      allContent = sortContentDesc(getMarkdownSingleCategory(type, category));
    }
  }
  return allContent;
};
