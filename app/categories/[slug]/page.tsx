import { MdxPath } from '../../../utils/interfaces';
import {
  getMarkdownAllPaths,
  getMarkdownSlugsFromCategoriesAllPaths,
} from '../../../utils/markdown';
import Headline from '../../components/headline';
import PortfolioGrid from '../../components/portfolioGrid';

const Page = (props) => {
  const slug = props.params.slug;
  //const category = slug.charAt(0).toUpperCase() + slug.slice(1);
  const category = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .toString()
    .replace(',', ' ');
  const parentSlug = getMarkdownAllPaths().find(
    (markdown) => markdown.meta.category === category
  ).meta.type;
  let postsCategory = '';
  switch (parentSlug) {
    case 'music':
      postsCategory = MdxPath.music;
      break;
    case 'illustrations':
      postsCategory = MdxPath.illustrations;
      break;
  }
  return (
    <section>
      <Headline title={`Category: ${category}`} />
      <PortfolioGrid
        category={postsCategory}
        slug={parentSlug}
        filter={category}
      />
    </section>
  );
};

export default Page;

export const generateStaticParams = async () => {
  return getMarkdownSlugsFromCategoriesAllPaths();
};
