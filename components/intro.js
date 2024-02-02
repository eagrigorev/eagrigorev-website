import styles from './intro.module.scss';

const Intro = () => {
  return (
    <header className={`${styles['wrapper']} grid`}>
      <h1 className={styles['title']}>
        Evgenii makes pixel art illustrations, writes music, arrangements, and
        code.
      </h1>
      <h2 className={styles['subtitle']}>
        Junior software developer based in Thessaloniki, Greece. Currently
        coding at T-Digital by Deutsche Telekom.
      </h2>
    </header>
  );
};

export default Intro;
