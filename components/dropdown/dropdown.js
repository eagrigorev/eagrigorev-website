import styles from './dropdown.module.scss';
import Link from 'next/link';

const Dropdown = ({ items }) => {
  return (
    <>
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
    </>
  );
};

export default Dropdown;
