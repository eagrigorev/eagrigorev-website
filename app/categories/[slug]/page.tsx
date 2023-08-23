import { Path, ParentType } from '../../../utils/interfaces';
import { getMarkdownAllPaths } from '../../../utils/markdown';
import Headline from '../../components/headline';
import PortfolioGrid from '../../components/portfolioGrid';

const Page = (props) => {
  const slug = props.params.slug;
  const category = slug.charAt(0).toUpperCase() + slug.slice(1);
  const parentSlug = getMarkdownAllPaths().find(
    (markdown) => markdown.meta.category === category
  ).meta.type;
  return (
    <section>
      <Headline title={`Category: ${category}`} />
      <PortfolioGrid
        category={Path.music}
        slug={parentSlug}
        filter={category}
      />
    </section>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const slugs: ParentType[] = ['music'];
  return slugs;
};
