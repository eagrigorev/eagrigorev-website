import styles from './PageTitle.module.scss';
import { normalize } from '@/scripts/normalize';
import Link from 'next/link';

const PageTitle = ({
  title,
  showSeparator,
  showMeta,
  dateEdited,
  category,
}) => {
  const classList = showSeparator
    ? `${styles['heading--centered']} ${styles['separator']} heading--h1`
    : `${styles['heading--left']} heading--h1`;
  return (
    <header className={styles['wrapper']}>
      <div className="grid">
        <h1 className={classList}>{title}</h1>
      </div>
      {showMeta ? (
        <div className={`${styles['meta']} meta-categories-text`}>
          <p>{dateEdited}</p>
          <Link
            className="link--darker transition--color"
            href={`/${normalize(category)}`}
          >
            {category}
          </Link>
        </div>
      ) : null}
    </header>
  );
};

export default PageTitle;
