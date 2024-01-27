import styles from './intro.module.scss';

const Intro = () => {
  return (
    <header className={`${styles['wrapper']} grid`}>
      <h1 className={styles['title']}>
        Evgenii makes pixel art illustrations, writes music, arrangements, and
        code.
      </h1>
      <p className={styles['subtitle']}>
        Junior software developer based in Thessaloniki, Greece. Currently
        coding at T-Digital by Deutsche Telekom.
      </p>
    </header>
  );
};

export default Intro;
