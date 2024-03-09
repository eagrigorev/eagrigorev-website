import styles from './menuItem.module.scss';
import Link from 'next/link';

const MenuItem = ({ item, isVisible, visibilityHandler }) => {
  return (
    <li
      className={`link-dropdown ${item.isDesktop ? styles['desktop'] : styles['mobile']}`}
    >
      {item.submenu ? (
        <>
          <span className="link-underline" onClick={visibilityHandler}>
            {item.title}
          </span>
          {isVisible ? <Dropdown items={item.submenu} /> : null}
        </>
      ) : (
        <Link className="link-underline" href={item.url}>
          {item.title}
        </Link>
      )}
    </li>
  );
};

const Dropdown = ({ items }) => {
  return (
    <ul className={styles['wrapper']}>
      {items.map((item, index) => (
        <li key={index}>
          <Link className="link-color" href={item.url}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
