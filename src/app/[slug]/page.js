import styles from './page.module.scss';
import { getProjects, getProjectsSlugs } from '@/scripts/getMarkdown';
import PageTitle from '@/components/PageTitle/PageTitle';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';

const Page = (props) => {
  const slug = props.params.slug;
  const allProjects = getProjects();
  const post = allProjects.find((project) => project.meta.slug === slug);
  if (post) {
    return (
      <main className="container">
        <PageTitle
          title={post.meta.title}
          showSeparator={true}
          showMeta={true}
          dateEdited={post.meta.dateEdited}
          category={post.meta.category}
        />
        <section className={`${styles['wrapper']} grid`}>
          <MarkdownWrapper layout="content--narrow" content={post.content} />
        </section>
      </main>
    );
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getProjectsSlugs();
};
