import styles from './postTitle.module.scss';

const PostTitle = ({ title, category, date }) => {
  return (
    <header className={`${styles['wrapper']}`}>
      <h1 className={styles['title']}>{title}</h1>
      <h2 className={styles['subtitle']}>
        {category} — {date}
      </h2>
    </header>
  );
};

export default PostTitle;
