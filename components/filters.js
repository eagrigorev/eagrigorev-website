import styles from './filters.module.scss';
import Link from 'next/link';

const Filters = () => {
  return (
    <div className={styles['wrapper']}>
      <ul className={styles['filters']}>
        <li>
          <Link className="link-underline" href={'/'}>
            See all
          </Link>
        </li>
        <li>
          <Link className="link-underline" href={'/'}>
            Illustrations
          </Link>
        </li>
        <li>
          <Link className="link-underline" href={'/'}>
            Music
          </Link>
        </li>
        <li>
          <Link className="link-underline" href={'/'}>
            Arrangements
          </Link>
        </li>
        <li>
          <Link className="link-underline" href={'/'}>
            Projects
          </Link>
        </li>
        <li>
          <Link className="link-underline" href={'/'}>
            Journal
          </Link>
        </li>
      </ul>
      <ul className={styles['filters-mobile']}>
        <li>
          <Link className="link-underline" href={'/'}>
            Filters
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
