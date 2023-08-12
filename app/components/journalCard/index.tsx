import styles from './styles.module.css';
import { Markdown } from '../../../utils/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const JournalCard = (props: { post: Markdown }) => {
  return (
    <article className={styles.container}>
      <Image
        src={props.post.meta.featuredImage}
        alt=""
        width={560}
        height={420}
      />
      <p className={styles.meta}>
        {props.post.meta.date} — {props.post.meta.category}
      </p>
      <h2 className={styles.title}>{props.post.meta.title}</h2>
      <p className={styles.meta}>{props.post.meta.excerpt}</p>
      <Link href={props.post.meta.slug}>read more</Link>
    </article>
  );
};

export default JournalCard;
