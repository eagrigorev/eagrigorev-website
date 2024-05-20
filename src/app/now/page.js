import styles from './page.module.scss';
import { getPage } from '@/scripts/getMarkdown';
import PageTitle from '@/components/PageTitle/PageTitle';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';

const Now = () => {
  const page = getPage('now.mdx');
  return (
    <main className="container">
      <PageTitle title={page.meta.title} showSeparator={true} />
      <section className={`${styles['wrapper']} grid`}>
        <MarkdownWrapper layout="content--narrow" content={page.content} />
      </section>
    </main>
  );
};

export default Now;