import styles from './title.module.scss';

const PageTitle = ({ title, subtitle }) => {
  return (
    <header className={`${styles['wrapper']} grid`}>
      <h1 className={`${styles['title']} ${styles['title__page']}`}>{title}</h1>
      <h2 className={`${styles['subtitle']} ${styles['subtitle__page']}`}>
        {subtitle}
      </h2>
    </header>
  );
};

const PostTitle = ({ title, category, date }) => {
  return (
    <header className={`${styles['wrapper']} ${styles['wrapper__post']}`}>
      <h1 className={styles['title']}>{title}</h1>
      <h2 className={`${styles['subtitle']} ${styles['subtitle__post']}`}>
        {category} — {date}
      </h2>
    </header>
  );
};

export { PageTitle, PostTitle };
