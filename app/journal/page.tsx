import styles from './styles.module.css';
import { getMarkdown } from '../../utils/getMarkdown';
import { Path } from '../../utils/interfaces';
import { sortMarkdownDesc } from '../../utils/sortMarkdown';
import JournalCard from '../components/journalCard';
import Categories from '../components/categories';

const Journal = () => {
  const markdowns = sortMarkdownDesc(getMarkdown(Path.writings));
  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.title}>Journal</h1>
      </header>
      <div className={styles.container}>
        <Categories markdowns={markdowns} />
        {markdowns.map((markdown) => (
          <JournalCard post={markdown} key={markdown.meta.slug} />
        ))}
      </div>
    </section>
  );
};

export default Journal;
