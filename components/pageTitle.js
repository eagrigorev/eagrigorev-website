import styles from './pageTitle.module.scss';

const PageTitle = () => {
  return (
    <header className={`${styles['wrapper']} grid`}>
      <h1 className={styles['title']}>Development Roadmap</h1>
      <h2 className={styles['subtitle']}>
        This website is the work in progress. I build it slowly and add notes
        about new features here.
      </h2>
    </header>
  );
};

export default PageTitle;
