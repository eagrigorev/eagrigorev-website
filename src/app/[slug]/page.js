import styles from './page.module.scss';
import { getProjects, getProjectsSlugs } from '@/scripts/getMarkdown';
import PageTitle from '@/components/PageTitle/PageTitle';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import RelatedEntries from '@/components/RelatedEntries/RelatedEntries';

const Page = (props) => {
  const slug = props.params.slug;
  const allProjects = getProjects();
  const post = allProjects.find((project) => project.meta.slug === slug);
  if (post) {
    return (
      <main>
        <section className="container">
          <PageTitle
            title={post.meta.title}
            showSeparator={true}
            showMeta={true}
            dateEdited={post.meta.dateEdited}
            category={post.meta.category}
          />
          <div className={`${styles['wrapper']} grid`}>
            <MarkdownWrapper layout="content--narrow" content={post.content} />
          </div>
        </section>
        <RelatedEntries content={allProjects} />
      </main>
    );
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getProjectsSlugs();
};
