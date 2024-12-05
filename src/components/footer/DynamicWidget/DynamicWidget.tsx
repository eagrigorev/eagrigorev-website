/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';
import SocialIcons from '@/components/common/SocialIcons/SocialIcons';

/* Data */
import footerPages from '@/data/footerPages.json';

/* Scripts */
import { generateTagsCloud } from '@/scripts/generateTagsCloud';
import { getAllPosts } from '@/scripts/getMarkdown';

/* Style */
import styles from './DynamicWidget.module.scss';

/* Utils */
import { Markdown } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';

type Props = {
  layout: 'about' | 'recent-posts' | 'tags' | 'pages';
  title: string;
};

const DynamicWidget: React.FunctionComponent<Props> = ({ layout, title }) => {
  const allPosts = getAllPosts()
    .filter((post: Markdown) => post.meta.category !== 'Library')
    .slice(0, 3);
  const tags = generateTagsCloud().slice(0, 10);
  return (
    <div className={styles['wrapper']}>
      <h4 className={`heading--h4 ${styles['title']}`}>{title}</h4>
      {layout === 'about' ? (
        <>
          <p className="paragraph--light-s">
            Lorem ipsum dolor sit dolor and other amet things for several lines
            of text.
          </p>
          <SocialIcons showFollowText={false} />
        </>
      ) : layout === 'recent-posts' ? (
        <ul className={`paragraph--light-s ${styles['items']}`}>
          {allPosts.map(
            (post: Markdown, index: number): React.JSX.Element => (
              <li key={index}>
                <span>{post.meta.dateEdited} </span>
                <a href={post.meta.slug}>{post.meta.title} </a>
                <span>in </span>
                <a href={post.meta.category}>{post.meta.category}</a>
              </li>
            )
          )}
        </ul>
      ) : layout === 'tags' ? (
        <ul className={`paragraph--light-xs ${styles['tags']}`}>
          {tags.map(
            (tag: string, index: number): React.JSX.Element => (
              <li key={index}>
                <Link
                  className={`color--grey-to-black ${styles['tag']}`}
                  href={`/${tag}`}
                >
                  {tag}
                </Link>
              </li>
            )
          )}
        </ul>
      ) : layout === 'pages' ? (
        <ul className={`paragraph--light-s ${styles['items']}`}>
          {footerPages.map(
            (item: NavigationItem, index: number): React.JSX.Element => (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            )
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default DynamicWidget;
