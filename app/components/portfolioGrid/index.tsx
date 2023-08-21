import styles from './styles.module.css';
import {
  getMarkdownSinglePath,
  sortMarkdownDesc,
} from '../../../utils/markdown';
import { PORTFOLIO_IMAGES } from '../../../utils/const';
import Link from 'next/link';
import Image from 'next/image';

const PortfolioGrid = ({ category, slug }) => {
  const markdownSinglePath = sortMarkdownDesc(getMarkdownSinglePath(category));
  let categories: string[] = [];
  markdownSinglePath.map((markdown) => categories.push(markdown.meta.category));
  categories = categories.filter(
    (category, index) => categories.indexOf(category) === index
  );
  return (
    <div className={styles.container}>
      <Filters categories={categories} slug={slug} />
      <div className={styles.items}>
        {markdownSinglePath.map((markdown) => (
          <PortfolioCard
            markdown={markdown}
            slug={slug}
            key={markdown.meta.slug}
          />
        ))}
      </div>
    </div>
  );
};

const PortfolioCard = ({ markdown, slug }) => {
  return (
    <article className={styles.item}>
      <Link href={`/${markdown.meta.slug}`}>
        <Image
          className={styles.image}
          src={`${PORTFOLIO_IMAGES}/${slug}/${markdown.meta.featuredImage}`}
          alt={markdown.meta.title}
          width={560}
          height={560}
        />
      </Link>
      <Link href={`/${markdown.meta.slug}`}>
        <p>{markdown.meta.title}</p>
      </Link>
    </article>
  );
};

const Filters = ({ categories, slug }) => {
  return (
    <ul className={styles.categories}>
      <li>
        <Link href={`/${slug}`}>
          <p>All</p>
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category}>
          <Link
            href={`/categories/${category.toLowerCase().replace(' ', '-')}`}
          >
            <p>{category}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioGrid;
