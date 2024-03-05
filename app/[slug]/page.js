import styles from './page.module.scss';
import { getPosts, getPostsSlugs } from '@/utils/getPosts';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import { PostTitle } from '@/components/title/title';
import ImageGallery from '@/components/imageGallery';

const Page = (props) => {
  const slug = props.params.slug;
  const post = getPosts().find((post) => post.meta.slug === slug);
  if (post && post.meta.category === 'Music') {
    return (
      <main className="container">
        <PostTitle
          title={post.meta.title}
          category={post.meta.category}
          date={post.meta.date}
        />
        <section className="content-wrapper grid">
          <ImageGallery
            className={styles['images']}
            images={post.meta.images}
          />
          <div className={styles['description']}>
            <Markdown
              options={{
                wrapper: React.Fragment,
                overrides: {
                  a: {
                    props: {
                      className: 'link-post',
                    },
                  },
                },
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </section>
      </main>
    );
  } else return <>NOPE</>;
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
