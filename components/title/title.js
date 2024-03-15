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
        className={`heading heading--bold-3xl-125 ${styles['title']} ${isPage ? styles['title--page'] : styles['title--post']}`}
      >
        {title}
      </h1>
      <h2
        className={`paragraph paragraph--light-l-125 ${styles['subtitle']} ${isPage ? styles['subtitle--page'] : styles['subtitle--post']}`}
      >
        {subtitle}
      </h2>
      {!isPage ? (
        <p className={`paragraph paragraph--light-s-125 ${styles['meta']}`}>
          Posted in {category} on {datePosted}. Last edited on {dateEdited}.
        </p>
      ) : null}
    </header>
  );
};

export default Title;
