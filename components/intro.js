import styles from './intro.module.scss';

const Intro = () => {
  return (
    <header className={`${styles['wrapper']} grid`}>
      <h1 className={styles['title']}>
        Evgenii makes illustrations, writes music, and code.
      </h1>
      <h2 className={styles['subtitle']}>
        Welcome to my online journal where I share my illustrations, designs,
        projects and other things I&apos;m interested in.
      </h2>
    </header>
  );
};

export default Intro;
