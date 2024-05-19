import { getProjects } from '@/scripts/getMarkdown';
import PageTitle from '@/components/PageTitle/PageTitle';

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
      </main>
    );
  }
};

export default Page;
