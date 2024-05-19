import styles from './PageTitle.module.scss';

const PageTitle = ({
  title,
  showSeparator,
  showMeta,
  dateEdited,
  category,
}) => {
  const classList = showSeparator
    ? `${styles['heading--centered']} ${styles['separator']} heading--h1`
    : `${styles['heading--left']} heading--h1`;
  return (
    <header className={styles['wrapper']}>
      <div className="grid">
        <h1 className={classList}>{title}</h1>
      </div>
      {showMeta ? (
        <div className={`${styles['meta']} meta-categories-text`}>
          <p>{dateEdited}</p>
          <p>{category}</p>
        </div>
      ) : null}
    </header>
  );
};

export default PageTitle;
