import styles from './filters.module.scss';
import Link from 'next/link';
import { LinkUnderline } from './link';

const Filters = () => {
  return (
    <div className={styles['wrapper']}>
      <ul className={styles['filters']}>
        <LinkUnderline link="/" title="See all" />
        <LinkUnderline link="/" title="Illustrations" />
        <LinkUnderline link="/" title="Music" />
        <LinkUnderline link="/" title="Arrangements" />
        <LinkUnderline link="/" title="Projects" />
        <LinkUnderline link="/" title="Journal" />
      </ul>
      <ul className={styles['filters-mobile']}>
        <LinkUnderline link="/" title="Filters" />
      </ul>
    </div>
  );
};

export default Filters;
