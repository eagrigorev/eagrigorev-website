import styles from './styles.module.css';
import { Markdown } from '../../../utils/interfaces';
import Link from 'next/link';

const Categories = (props: { markdowns: Markdown[] }) => {
  const categories: string[] = [];
  props.markdowns.map((markdown) => categories.push(markdown.meta.category));
  return (
    <ul className={styles.categories}>
      <li>
        <Link href={'/journal'}>All</Link>
      </li>
      {categories.map((category) => (
        <li key={category}>
          <Link href={`/category/${category.replace(' ', '-').toLowerCase()}`}>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
