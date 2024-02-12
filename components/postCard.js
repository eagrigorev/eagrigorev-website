import styles from './postCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
  return (
    <article>
      <Image alt="Post Image" />
      <div>
        <h3></h3>
        <p></p>
      </div>
    </article>
  );
};

export default PostCard;
