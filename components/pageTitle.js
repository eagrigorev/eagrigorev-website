import styles from './pageTitle.module.scss';

const PageTitle = ({ title, subtitle }) => {
  return (
    <header className={`${styles['wrapper']} grid`}>
      <h1 className={styles['title']}>{title}</h1>
      <h2 className={styles['subtitle']}>{subtitle}</h2>
    </header>
  );
};

export default PageTitle;
