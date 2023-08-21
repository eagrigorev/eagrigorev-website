import styles from './styles.module.css';

const Headline = ({ title, subtitle }) => {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>
      <p className="subheading">{subtitle}</p>
    </header>
  );
};

export default Headline;
