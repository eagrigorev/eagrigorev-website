import styles from './linksWidget.module.scss';
import { categories, pages } from '@/utils/getNavigationItems';
import Link from 'next/link';

const LinksWidget = () => {
  return (
    <div className={styles['wrapper']}>
      <h4 className={`${styles['title']} heading`}>Links</h4>
      <div className={styles['links-wrapper']}>
        <ul className={styles['links']}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link className="link link--color" href={category.url}>
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles['links']}>
          {pages.map((page, index) => (
            <li key={index}>
              <Link className="link link--color" href={page.url}>
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinksWidget;
