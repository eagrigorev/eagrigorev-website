import { loadContent } from '@/utils/loadContent';
import GridGenerator from '../GridGenerator/GridGenerator';

const ContentGrid = ({ type, category, postsToShow, postsToLoad }) => {
  let allContent = loadContent(type, category);
  return (
    <section>
      <GridGenerator
        type={'projects'}
        content={allContent}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </section>
  );
};

export default ContentGrid;
