import styles from './link.module.scss';
import Link from 'next/link';

const LinkUnderline = ({ link, title }) => {
  return (
    <li>
      <Link className={`${styles['link']} ${styles['underline']}`} href={link}>
        {title}
      </Link>
    </li>
  );
};

const LinkColor = ({ link, title }) => {
  return (
    <li>
      <Link className={`${styles['link']} ${styles['color']}`} href={link}>
        {title}
      </Link>
    </li>
  );
};

export { LinkColor, LinkUnderline };
