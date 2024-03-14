import styles from './title.module.scss';

const Title = ({
  isPage,
  title,
  subtitle,
  category,
  datePosted,
  dateEdited,
}) => {
  return (
    <header className={`${styles['wrapper']} grid`}>
      <h1
        className={`heading ${styles['title']} ${isPage ? styles['title--page'] : styles['title--post']}`}
      >
        {title}
      </h1>
      <h2
        className={`${styles['subtitle']} ${isPage ? styles['subtitle--page'] : styles['subtitle--post']}`}
      >
        {subtitle}
      </h2>
      {!isPage ? (
        <p className={styles['meta']}>
          Posted in {category} on {datePosted}. Last edited on {dateEdited}.
        </p>
      ) : null}
    </header>
  );
};

export default Title;
