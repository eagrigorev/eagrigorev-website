import Link from 'next/link';
import Dropdown from './dropdown';

const MenuItem = ({ item, isVisible, visibilityHandler }) => {
  return (
    <li>
      {item.submenu ? (
        <>
          <span
            className="link-dropdown link-underline"
            onClick={visibilityHandler}
          >
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

export default MenuItem;
