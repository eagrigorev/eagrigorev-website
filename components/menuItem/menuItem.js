import styles from './menuItem.module.scss';
import Link from 'next/link';

const MenuItem = ({ item, showDropdown, handleDropdown }) => {
  return (
    <li className={item.isDesktop ? styles['desktop'] : styles['mobile']}>
      {item.submenu ? (
        <>
          <span
            className="link link--dropdown heading heading--regular-m-100"
            onClick={handleDropdown}
          >
            {item.title}
          </span>
          {showDropdown ? (
            <ul className={styles['dropdown-wrapper']}>
              {item.submenu.map((subItem, index) => (
                <li key={index}>
                  <Link
                    className="link link--color heading heading--regular-s-100"
                    href={subItem.url}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
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
