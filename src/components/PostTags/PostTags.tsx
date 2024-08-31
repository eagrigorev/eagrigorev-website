/* Namespaces */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Utils */
import styles from './PostTags.module.scss';

type Props = {
  tags: string;
};

const PostTags: React.FunctionComponent<Props> = ({ tags }) => {
  const tagsArray = tags.split(' ');
  return (
    <section className={styles['wrapper']}>
      <h2 className="paragraph--bolder">Tags:</h2>
      <ul className={`${styles['links']} paragraph--regular`}>
        {tagsArray.map((tag: string, index: number) => (
          <li key={index}>
            <Link
              className="link--underline transition--border"
              href={`/${tag}`}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostTags;
