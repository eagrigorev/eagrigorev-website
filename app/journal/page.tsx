import styles from './styles.module.css';
import { getMarkdown } from '../../utils/getMarkdown';
import { Path } from '../../utils/interfaces';
import { sortMarkdownDesc } from '../../utils/sortMarkdown';
import Link from 'next/link';
import JournalCard from '../components/journalCard';

const Journal = () => {
  const markdowns = sortMarkdownDesc(getMarkdown(Path.writings));
  const categories: string[] = [];
  markdowns.map((markdown) => categories.push(markdown.meta.category));
  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.title}>Journal</h1>
      </header>
      <div className={styles.container}>
        <ul className={styles.categories}>
          <li>
            <Link href={'/journal'}>All</Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/category/${category.replace(' ', '-').toLowerCase()}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        {markdowns.map((markdown) => (
          <JournalCard post={markdown} key={markdown.meta.slug} />
        ))}
      </div>
    </section>
  );
};

export default Journal;
