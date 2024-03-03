import styles from './dropdown.module.scss';
import Link from 'next/link';

const Dropdown = ({ items }) => {
  return (
    <ul className={styles['wrapper']}>
      {items.map((item) => (
        <li key={item}>
          <Link
            className="link-color"
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
