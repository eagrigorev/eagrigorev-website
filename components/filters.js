import styles from './filters.module.scss';
import { LinkUnderline } from './link';

const Filters = () => {
  return (
    <div className={styles['wrapper']}>
      <ul className={styles['filters']}>
        <LinkUnderline link="/" title="Illustrations" />
        <LinkUnderline link="/" title="Music" />
      </ul>
      <ul className={styles['filters-mobile']}>
        <LinkUnderline link="/" title="Filters" />
      </ul>
    </div>
  );
};

export default Filters;
