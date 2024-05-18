import { loadContent } from '@/utils/loadContent';
import GridGenerator from '../GridGenerator/GridGenerator';

const ContentGrid = ({ type, category }) => {
  let allContent = loadContent(type, category);
  return <GridGenerator type={'projects'} content={allContent} />;
};

export default ContentGrid;
