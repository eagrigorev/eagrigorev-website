import styles from './ContentGrid.module.scss';
import { getProjects, getMarkdownSingleCategory } from '@/scripts/getMarkdown';
import { sortContentDesc } from '@/utils/sort';
import ProjectCard from '../ProjectCard/ProjectCard';

const ContentGrid = ({ type, category }) => {
  let allContent = [];
  if (type === 'projects') {
    if (category === 'all') {
      allContent = sortContentDesc(getProjects()).slice(0, 6);
    } else {
      allContent = sortContentDesc(
        getMarkdownSingleCategory(type, category)
      ).slice(0, 6);
    }
  }
  return (
    <section>
      {allContent.map((content) =>
        type === 'projects' ? (
          <ProjectCard projectMeta={content.meta} key={content.meta.slug} />
        ) : (
          ''
        )
      )}
    </section>
  );
};

export default ContentGrid;
