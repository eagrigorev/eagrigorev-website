import styles from './menuItem.module.scss';
import Link from 'next/link';
import Dropdown from '../dropdown/dropdown';

const MenuItem = ({ item, isVisible, visibilityHandler }) => {
  return (
    <li className={item.isDesktop ? styles['desktop'] : styles['mobile']}>
      {item.submenu ? (
        <>
          <span
            className="link link--dropdown heading heading--regular-m-100"
            onClick={visibilityHandler}
          >
            {item.title}
          </span>
          {isVisible ? <Dropdown items={item.submenu} /> : null}
        </>
      ) : (
        <Link
          className="link link--underline heading heading--regular-m-100"
          href={item.url}
        >
          {item.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
