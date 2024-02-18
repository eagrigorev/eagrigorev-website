import styles from './postCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
  return (
    <article className={styles['wrapper']}>
      <Link href={'/'}>
        <Image className={styles['image']} alt="Post Image" />
      </Link>
      <div>
        <p className={styles['meta']}>Travel — February 14, 2024</p>
        <Link href={'/'}>
          <h3 className={styles['title']}>Exploring the Pacific Northwest</h3>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
