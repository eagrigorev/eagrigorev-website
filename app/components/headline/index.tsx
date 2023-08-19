import styles from './styles.module.css';

const Headline = () => {
  return (
    <header className={styles.container}>
      <h1>Hi, I’m Evgenii</h1>
      <p className="subheading">
        I’m a software developer and artist based in Thessaloniki, Greece.
      </p>
    </header>
  );
};

export default Headline;
