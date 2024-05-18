import styles from './PageTitle.module.scss';

const PageTitle = ({ title }) => {
  return (
    <header className={`${styles['wrapper']} grid`}>
      <h1 className={`${styles['heading']} heading--h1`}>{title}</h1>
    </header>
  );
};

export default PageTitle;
