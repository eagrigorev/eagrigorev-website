import styles from './menuItem.module.scss';
import Link from 'next/link';
import Dropdown from '../dropdown/dropdown';

const MenuItem = ({ item, isVisible, visibilityHandler }) => {
  return (
    <li className={item.isDesktop ? styles['desktop'] : styles['mobile']}>
      {item.submenu ? (
        <>
          <span className="link link--dropdown" onClick={visibilityHandler}>
            {item.title}
          </span>
          {isVisible ? <Dropdown items={item.submenu} /> : null}
        </>
      ) : (
        <Link className="link link--underline" href={item.url}>
          {item.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
