import styles from './dropdown.module.scss';
import Link from 'next/link';

const Dropdown = ({ items }) => {
  return (
    <ul className={styles['wrapper']}>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            className="link link--color heading heading--regular-s-100"
            href={item.url}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
