import styles from './ContentGrid.module.scss';
import { loadContent } from '@/utils/loadContent';
import ProjectCard from '../ProjectCard/ProjectCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const ContentGrid = ({ type, category, amountToShow }) => {
  let allContent = loadContent(type, category);
  const loadMore = () => {
    return amountToShow + 6;
  };
  let displayedContent = allContent.splice(0, amountToShow);
  return (
    <section>
      <div className={`${styles['wrapper']} grid`}>
        {displayedContent.map((content) =>
          type === 'projects' ? (
            <ProjectCard projectMeta={content.meta} key={content.meta.slug} />
          ) : (
            ''
          )
        )}
      </div>
      <LoadMoreButton />
    </section>
  );
};

export default ContentGrid;
