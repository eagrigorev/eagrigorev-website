import styles from './page.module.scss';
import Intro from '@/components/intro';
import SectionHeader from '@/components/sectionHeader';

export default function Home() {
  return (
    <main className="container">
      <Intro />
      <section className={styles['wrapper']}>
        <SectionHeader />
      </section>
    </main>
  );
}
